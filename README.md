# advanced-git

Explaining git features beyond git push

## Topics

- config levels
- .gitattributes
- Submodules
- Hooks
- Bisect

## 0) config levels

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

Sometimes we need to retain the line endings in the file itself

```
tests/newline/CRLF.js text eol=crl
```

Default decissions on merge
```
yarn.lock merge=ours
package-lock.json merge=ours
```

## 2) Submodules
## 3) Hooks
## 4) Bisect