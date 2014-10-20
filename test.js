'use strict';

var importRegex = require('./');
var test = require('ava');

test('match CSS @imports', function (t) {
	t.plan(3);

	var fixtures = [
		'@import url(\'foo.css\');',
		'@import url(\'bar.css\');'
	];

	fixtures.forEach(function (el) {
		t.assert(importRegex().test(el), el);
	});

	t.assert(importRegex().exec('aaa @import url(\'foo.css\'); aaa ')[0].trim() === '@import url(\'foo.css\')');
});
