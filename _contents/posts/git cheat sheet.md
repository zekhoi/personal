---
title: Git Cheat Sheet
author: Khoironi Kurnia Syah
icon: git-network
tags: ["git", "english"]
thumbnail: /images/thumbnails/git-cheat-sheet.jpg
summary: Git cheat sheet that serves as a quick reference for basic Git commands to help you learn Git.
date: 2021-07-21
---

Git is an acronym for Global Information Tracker. Git is a software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

#### GIT BASICS

---

Create empty Git repo in specified directory. Run with no arguments to initialize the current directory as a git repository

```bash
git init <directory>
```

---

Clone repo located at `<repo>` onto local machine. Original repo can be located on the local filesystem or on a remote machine via HTTP or SSH.

```bash
git clone <repo>
```

---

Define author name or email to be used for all commits in current repo. Devs commonly use --global flag to set config options for current user.

```bash
git config user.name <name>
```

```bash
git config user.email <email>
```

---

Commit the staged snapshot, but instead of launching a text editor, use `<message>` as the commit message.

```bash
git add <directory>
```

---

List which files are staged, unstaged, and untracked.

```bash
git status
```

---

Display the entire commit history using the default format. For customization see additional options.

```bash
git log
```

---

Show unstaged changes between your index and working directory.

```bash
git diff
```

---

#### UNDOING CHANGES

---

Create new commit that undoes all of the changes made in `<commit>`, then apply it to the current branch.

```bash
git revert <commit>
```

---

Remove `<file>` from the staging area, but leave the working directory unchanged. This unstages a file without overwriting any changes.

```bash
git reset <file>
```

---

Shows which files would be removed from working directory. Use the -f flag in place of the -n flag to execute the clean.

```bash
git clean -n
```

---

#### REWRITING GIT HISTORY

---

Replace the last commit with the staged changes and last commit combined. Use with nothing staged to edit the last commit’s message.

```bash
git commit --amend
```

---

Rebase the current branch onto `<base>`. `<base>` can be a commit ID, branch name, a tag, or a relative reference to HEAD.

```bash
git rebase <base>
```

---

Show a log of changes to the local repository’s HEAD. Add --relative-date flag to show date info or --all to show all refs.

```bash
git reflog
```

---

#### GIT BRANCHES

---

List all of the branches in your repo. Add a `<branch>` argument to create a new branch with the name `<branch>`.

```bash
git branch
```

---

Create and check out a new branch named `<branch>`. Drop the -b flag to checkout an existing branch.

```bash
git checkout -b <branch>
```

---

Merge `<branch>` into the current branch.

```bash
git merge <branch>
```

---

#### REMOTE REPOSITORIES

---

Create a new connection to a remote repo. After adding a remote, you can use `<name>` as a shortcut for `<url>` in other commands.

```bash
git remote add <name> <url>
```

---

Fetches a specific `<branch>`, from the repo. Leave off `<branch>` to fetch all remote refs.

```bash
git fetch <remote> <branch>
```

---

Fetch the specified remote’s copy of current branch and immediately merge it into the local copy.

```bash
git pull <remote>
```

---

Push the branch to `<remote>`, along with necessary commits and objects. Creates named branch in the remote repo if it doesn’t exist.

```bash
git push <remote> <branch>
```

---

### Additional Options+

#### GIT CONFIG

---

Define the author name to be used for all commits by the current user.

```bash
git config --global user.name <name>
```

---

Define the author email to be used for all commits by the current user.

```bash
git config --global user.email <email>
```

---

Create shortcut for a Git command. E.g. alias.glog “log --graph --oneline” will set ”git glog” equivalent to ”git log --graph --oneline.

```bash
git config --global alias. <alias-name> <git-command>
```

---

Set text editor used by commands for all users on the machine. `<editor>` arg should be the command that launches the desired editor (e.g., vi).

```bash
git config --system core.editor <editor>
```

---

Open the global configuration file in a text editor for manual editing.

```bash
git config --global --edit
```

---

#### GIT LOG

---

Limit number of commits by `<limit>`. E.g. ”git log -5” will limit to 5 commits.

```bash
git log -<limit>
```

---

Condense each commit to a single line.

```bash
git log --oneline
```

---

Display the full diff of each commit. --graph --oneline.

```bash
git log -p
```

---

Include which files were altered and the relative number of lines that were added or deleted from each of them.

```bash
git log --stat
```

---

Search for commits by a particular author.

```bash
git log --author=”<pattern>”
```

---

Search for commits with a commit message that matches `<pattern>`.

```bash
git log --grep=”<pattern>”
```

---

Show commits that occur between `<since>` and `<until>`. Args can be a commit ID, branch name, HEAD, or any other kind of revision reference.

```bash
git log <since>..<until>
```

---

Only display commits that have the specified file.

```bash
git log --follow <file>
```

---

--graph flag draws a text based graph of commits on left side of commit msgs. --decorate adds names of branches or tags of commits shown.

```bash
git log --graph --decorate
```

---

#### GIT DIFF

---

Show difference between working directory and last commit.

```bash
git diff HEAD
```

---

Show difference between staged changes and last commit.

```bash
git diff --cached
```

---

#### GIT RESET

---

Reset staging area to match most recent commit, but leave the working directory unchanged.

```bash
git reset
```

---

Reset staging area and working directory to match most recent commit and overwrites all changes in the working directory.

```bash
git reset --hard
```

---

Move the current branch tip backward to `<commit>`, reset the staging area to match, but leave the working directory alone.

```bash
git reset <commit>
```

---

Same as previous, but resets both the staging area & working directory to match. Deletes uncommitted changes, and all commits after `<commit>`.

```bash
git reset --hard <commit>
```

---

#### GIT REBASE

---

Interactively rebase current branch onto `<base>`. Launches editor to enter commands for how each commit will be transferred to the new base.

```bash
git rebase -i <base>
```

---

#### GIT PULL

---

Fetch the remote’s copy of current branch and rebases it into the local copy. Uses git rebase instead of merge to integrate the branches.

```bash
git pull --rebase <remote>
```

---

#### GIT PUSH

---

Forces the git push even if it results in a non-fast-forward merge. Do not use the --force flag unless you’re absolutely sure you know what you’re doing.

```bash
git push <remote> --force
```

---

Push all of your local branches to the specified remote.

```bash
git push <remote> --all
```

---

Tags aren’t automatically pushed when you push a branch or use the --all flag. The --tags flag sends all of your local tags to the remote repo.

```bash
git push <remote> --tags
```

---
