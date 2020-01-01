# advanced-git

Explaining git features beyond git push

## Topics

- .gitattributes
- Submodules
- Hooks
- Bisect

## 1) .gitattributes

Normalize the line endings
```
* text=auto
```

Sometimes we need to retain the line endings in the file itself

```
tests/newline/CRLF.php text eol=crl
```

Default decissions on merge
```
yarn.lock merge=ours
package-lock.json merge=ours
```

## 2) Submodules
## 3) Hooks
## 4) Bisect