// 数源码里还写死的中文界面文案（ADR-0156）：字符串、模板与 JSX 文字里带汉字的节点各算一处。
// 注释、import 路径、对象键和 console 调用不算；测试文件不扫。
// 门槛在 `test/i18n.test.ts`：`src/` 下一处都不许有；文案写进 `src/locales/<语言>/*.json`，用 `t()` 取。
// 直接运行列出还有中文的文件与处数。
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseSync } from 'oxc-parser';

const frontend = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const HAN = /[㐀-鿿]/;

const EXEMPT = /\bi18n-exempt[:：]\s*\S/;
const EXEMPT_FILE = /\bi18n-exempt-file[:：]\s*\S/;

/** 一个源文件里带汉字的文案节点数。
 *  不是界面文案的中文（要和服务端或内容里的中文值比对的词）在同一行或上一行写 `// i18n-exempt: 理由`，不计数。
 *  不能导入翻译入口的独立脚本（以 classic script 原样加载）在文件头的注释里写 `i18n-exempt-file: 理由`，整份不计。 */
export function countLiterals(path, source) {
  const parsed = parseSync(path, source);
  const head = parsed.comments[0];
  if (head && head.start === source.search(/\S/) && EXEMPT_FILE.test(head.value)) return 0;
  const breaks = [...source.matchAll(/\n/g)].map((match) => match.index);
  const lineOf = (offset) => { let low = 0, high = breaks.length; while (low < high) { const mid = (low + high) >> 1; if (breaks[mid] < offset) low = mid + 1; else high = mid; } return low + 1; };
  const exempt = new Set(parsed.comments.filter((comment) => EXEMPT.test(comment.value))
    .flatMap((comment) => { const line = lineOf(comment.end); return [line, line + 1]; }));
  let count = 0;
  const walk = (node, parent, key) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) { for (const item of node) walk(item, parent, key); return; }
    if (node.type === 'CallExpression' && node.callee?.type === 'MemberExpression' && node.callee.object?.name === 'console') return;
    const machine = (parent?.type === 'ImportDeclaration' || parent?.type?.startsWith('Export')) && key === 'source'
      || key === 'key' && parent?.type === 'Property' && !parent.computed;
    if (!machine) {
      if ((node.type === 'Literal' && typeof node.value === 'string' && HAN.test(node.value))
        || (node.type === 'TemplateElement' && HAN.test(node.value?.cooked ?? node.value?.raw ?? ''))
        || (node.type === 'JSXText' && HAN.test(node.value))) count += exempt.has(lineOf(node.start)) ? 0 : 1;
    }
    for (const [childKey, child] of Object.entries(node)) {
      if (childKey !== 'type' && childKey !== 'start' && childKey !== 'end') walk(child, node, childKey);
    }
  };
  walk(parsed.program, null, null);
  return count;
}

function* sources(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) { if (entry.name !== 'locales') yield* sources(path); continue; }
    if (/\.(ts|tsx|js|mjs)$/.test(entry.name) && !/\.(test|d)\.[a-z]+$/.test(entry.name)) yield path;
  }
}

/** `src/` 下每个还有中文文案的文件 → 处数，键是相对 `frontend/` 的路径。 */
export function scan(root = frontend) {
  const counts = {};
  for (const path of sources(join(root, 'src'))) {
    const count = countLiterals(path, readFileSync(path, 'utf8'));
    if (count) counts[relative(root, path).replaceAll('\\', '/')] = count;
  }
  return Object.fromEntries(Object.entries(counts).sort(([a], [b]) => a.localeCompare(b)));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const current = Object.entries(scan());
  for (const [file, count] of current) console.log(`${file}: ${count}`);
  console.log(`写死的中文文案 ${current.reduce((sum, [, count]) => sum + count, 0)} 处`);
  process.exitCode = current.length ? 1 : 0;
}
