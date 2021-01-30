# Dual Mode Library

## Features

* Creates a library that can be both `import`-ed and `require`-ed
* Uses Rollup

## Issues

* Doesn't work if one of the dependencies is an ESM-only module
* Ugly warning
* If `rollup.config.mjs` doesn't use the `.mjs` extension, it will be treated as CommonJS.
