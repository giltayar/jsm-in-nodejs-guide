# The simplest template, but with `.js` files

## Features

* main entry point using `main` in `package.json`
* Using `package.json` with `"type": "module"` means we can (and must) use `.js` files
* If you need to use CJS files (for example, some tools still support only CommonJS),
  use the `.cjs` extension.
* VSCode recognizes the files, and intellisenses them.
  * Try it by Ctrl-Click to `add.mjs` and hovering over `add` in `src/main.js` to see its signature
