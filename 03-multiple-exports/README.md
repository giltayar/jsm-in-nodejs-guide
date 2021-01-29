# Multiple export entry points

## Features

* Using `exports` instead of `main` in `package.json`
* The ability to self-reference yourself
* Multiple entry points
* Hiding implementation. You cannot deep-link.
* Always export `package.json`
* Always continue using `main`, because many tools still read it (e.g. TypeScript)

## Issues

* VSCode do not recognize self-referencing a module, so no intellisense on it
