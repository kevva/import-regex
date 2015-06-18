'use strict';

module.exports = function (opts) {
	opts = opts || {};
	var regex = '(?:@import)(?:\\s)(?:url)?(?:(?:(?:\\()(["\'])?(?:[^"\')]+)\\1(?:\\))|(["\'])(?:.+)\\2)(?:[A-Z\\s])*)+(?:;)';

	return opts.exact ? new RegExp('(?:^' + regex + '$)', 'i') :
						new RegExp(regex, 'gi');
};
