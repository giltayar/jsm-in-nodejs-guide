# Multiple export entry points

## Features

* Use Mocha and Chai for testing
* Use Testdouble.js for mocking imports
  * You have to use `--loader=`
* Use ESLint
  * Support import/export
  * Support `import.meta.url`
  * Support top-level await (by switching to `@babel/eslint-parser`)
* Use Node ESLint plugin

## Issues

* VSCode do not recognize self-referencing a module, so no intellisense on it
* https://github.com/mysticatea/eslint-plugin-node/issues/250

