'use strict';

module.exports = opts => {
	opts = opts || {};
	const regex = '(?:@import)(?:\\s)(?:url)?(?:(?:(?:\\()(["\'])?(?:[^"\')]+)\\1(?:\\))|(["\'])(?:.+)\\2)(?:[A-Z\\s])*)+(?:;)';
	return opts.exact ? new RegExp(`(?:^${regex}$)`, 'i') : new RegExp(regex, 'gi');
};
