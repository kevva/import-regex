import test from 'ava';
import m from '.';

test('match CSS @imports', t => {
	const fixtures = [
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

	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}
});

test('do not match CSS @imports', t => {
	const fixtures = [
		'@import "foo/bar.css"',
		'@import url (foo/bar.css);',
		'@import url("foo/bar.css);',
		'@import url(foo/bar.css) ** (min-width: 25em) ;'
	];

	for (const x of fixtures) {
		t.false(m({exact: true}).test(x));
	}
});
