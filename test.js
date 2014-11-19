'use strict';

var importRegex = require('./');
var test = require('ava');

test('match CSS @imports', function (t) {
	var fixtures = [
		'@import "foo/bar.css";',
		'@import "foo/bar.css" (min-width: 25em);',
		'@import url(foo/bar.css);',
		'@import url(foo/bar.css) (min-width: 25em);',
		'@import url("foo/bar.css");',
		'@import url("foo/bar.css") (min-width: 25em);',
		'@import url(\'foo/bar.css\');',
		'@import url(\'foo/bar.css\') (min-width: 25em);',
		'@import url(foo/bar.css) only screen and (min-width: 25em) and (orientation: landscape);',
		'@import url(foo/bar.css) only screen and (min-width: 25em);'
	];

	fixtures.forEach(function (el) {
		if (!importRegex().exec(el)) {
			t.assert(false, el);
			return;
		}

		t.assert(importRegex().exec(el)[0] === el, el);
	});

	t.end();
});

test('do not match CSS @imports', function (t) {
	var fixtures = [
		'@import "foo/bar.css"',
		'@import url (foo/bar.css);',
		'@import url("foo/bar.css);',
		'@import url(foo/bar.css) ** (min-width: 25em) ;'
	];

	fixtures.forEach(function (el) {
		if (!importRegex().exec(el)) {
			t.assert(true);
			return;
		}

		t.assert(importRegex().exec(el)[0] !== el, el);
	});

	t.end();
});
