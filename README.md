# advanced-git

Explaining git features beyond git push

## Topics

- Config levels
- .gitattributes
- Submodules
- Hooks
- Bisect

## 0) Config levels

Evaluated from the repository up
- local (repository/.git/config)
- global (/home/maarten/.gitconfig)
- system (/etc/git/gitconfig)

Edit a specific level
```
git config --global -e
```

## 1) .gitattributes

Normalize the line endings
```
* text=auto
```

Windows had CRLF
Unix has LF

Sometimes we need to retain the line endings in the file itself

```
tests/newline/CRLF.js text eol=crl
```

Specify files as binary
```
*.jpg binary
*.jpeg binary
```

Diffing binary files
```
*.jpg diff=exif
*.jpeg diff=exif
```

```
git config --global diff.exif.textconv exiftool
```

Remove files from export
```
yarn.lock export-ignore
.gitignore export-ignore
.gitattributes export-ignore
```

Create an export
```
git archive -o latest.zip HEAD
```

Default decisions on merge
```
yarn.lock merge=ours
package-lock.json merge=ours
```

## 2) Submodules and subtrees

Add directory to put the submodule in
```
mkdir external
```

Add the submodule
```
git submodule add <url> <location>
```
Navigate to the submodule and see all files are there
Open up the .gitsubmodules file and see the reference

```
git status
```

Not alot of information, add a new configuration

```
git config --global status.submoduleSummary true
```
Run git status again
```
git status
```

Clone the repository to a new location to see that submodules are not initialized by default.

```
cd ..
git clone repo clone
```

No files are in the external directory

```
git submodule init
git submodule update
```

Remove a submodule

```
git submodule deinit external/example-submodule
git rm external/example-submodule
```

Working in teams
```
git pull
git submodule sync --recursive
git submodule update --init --recursive
```

Make a change in a submodule, commit locally, don't push
Go to the parent, git status and see the updated reference.
Create a commit for it. This is a problem if the parent gets pushed. This will break the repository for the other team members.

```
git config --global push.recursiveSubmodules on-demand
```

Or if you don't want to set that global setting

```
git push --recurse-submodules=on-demand
```

Get all the diffs for all submodules

```
git submodule foreach --recursive git diff
```

## 3) Hooks

Modify the location of the hooks directory

```
git config --local core.hooksPath .githooks
```
## 4) Bisect
