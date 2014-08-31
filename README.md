# import-regex [![Build Status](https://travis-ci.org/kevva/import-regex.svg?branch=master)](https://travis-ci.org/kevva/import-regex)

> Regular expression for matching CSS @imports

## Install

```sh
$ npm install --save import-regex
```

## Usage

```js
var importRegex = require('import-regex');

importRegex().test('@import url(\'foo.css\');');
//=> true

importRegex().exec('This is a CSS import @import url(\'foo.css\');')[0].trim();
//=> @import url('foo.css')

'Multiple @import url(\'foo.css\'); @import url(\'bar.css\'); CSS imports'.match(importRegex());
//=> ['@import url('foo.css')', '@import url('bar.css')']
```

## License

MIT © [Kevin Mårtensson](http://kevinmartensson.com)
