# import-regex [![Build Status](http://img.shields.io/travis/kevva/import-regex.svg?style=flat)](https://travis-ci.org/kevva/import-regex)

> Regular expression for matching CSS @imports


## Install

```
$ npm install --save import-regex
```


## Usage

```js
const importRegex = require('import-regex');

importRegex().test('@import url(\'foo.css\'); foo bar');
//=> true

importRegex({exact: true}).test('@import url(\'foo.css\'); foo bar');
//=> false

importRegex({exact: true}).test('@import url(\'foo.css\');');
//=> true

'foo @import url(\'foo.css\'); bar @import url(\'bar.css\');'.match(importRegex());
//=> ['@import url('foo.css');', '@import url('bar.css');']
```


## API

### importRegex([options])

Returns a regex for matching CSS @imports.

#### options

Type: `Object`

##### exact

Type: `Boolean`<br>
Default: `false`

Only match an exact string. Useful with `RegExp#test` to check if a string is a CSS @import.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
