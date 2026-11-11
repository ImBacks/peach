"""fork 来的 PR 不得以维护者为作者提交。

贡献者的智能体读到仓库约定后，可能照 `git log` 把 user.name 和 user.email 配成维护者，
提交就记在维护者名下，署名与追责都会错位。CI 对 fork PR 运行本检查，本机 `integrate`
遇到跨仓库 PR 也查同一范围。
"""
from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path

if not __package__:
    sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
    __package__ = "scripts"
from .check_readme_impact import git, unpublished
from .co_author import MAINTAINER_MAILS

FIX = (
    "先把自己的身份配好，再重写这些提交并强推 PR 分支：\n"
    "First set your own identity, then rewrite these commits and force-push the PR branch:\n"
    '  git config user.name "<your name>"\n'
    '  git config user.email "<your email>"\n'
    '  git rebase -r <base> --exec "git commit --amend --no-edit --reset-author"\n'
    "  git push --force-with-lease\n"
    "<base> 是 PR 的目标分支，例如 upstream/master。\n"
    "<base> is the PR's target branch, e.g. upstream/master."
)


def problems(repo: Path, base: str, head: str = "HEAD") -> list[str]:
    """`base..head` 里作者是维护者的非 merge 提交，每条写成 `短 hash 主题`。

    只看作者：GitHub 按作者记贡献，冒用也落在作者上。提交者是维护者有正当来源——维护者
    rebase 或 cherry-pick 贡献者的提交、`integrate` 刷新分支——不拦。merge 提交也不看，
    网页上「Update branch」生成的 merge 作者就是点按钮的维护者。
    已发布到远端 master 的提交本来就是维护者的，排除在外。
    """
    output = git(repo, "log", "--no-merges", "--format=%h%x00%ae%x00%s",
                 f"{base}..{head}", *unpublished(repo))
    found = []
    for line in output.splitlines():
        if not line.strip():
            continue
        short, author, subject = line.split("\0", 2)
        if author.strip().casefold() in MAINTAINER_MAILS:
            found.append(f"{short} {subject}")
    return found


def explain(found: list[str]) -> str:
    return ("以下提交的作者是维护者 / These commits are authored as the maintainer:\n"
            + "\n".join(f"  {item}" for item in found) + "\n" + FIX)


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base", required=True, help="PR 的目标提交")
    parser.add_argument("--head", default="HEAD", help="PR 的头提交")
    args = parser.parse_args(argv)
    try:
        found = problems(Path.cwd(), args.base, args.head)
    except subprocess.CalledProcessError as error:
        print(f"未取得提交身份：{(error.stderr or '').strip() or error}", file=sys.stderr)
        return 2
    if found:
        print(explain(found), file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
