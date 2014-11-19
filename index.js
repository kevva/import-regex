'use strict';

/**
 * Regular expression for matching CSS @imports
 *
 * @api public
 */

module.exports = function () {
	return /(?:^|\s)?(?:@import)(?:\s)(?:url)?(?:(?:(?:\()(["\'])?(?:[^"\')]+)\1(?:\))|(["\'])(?:.+)\2)(?:[A-Z\s])*)+(?:;)/ig;
};
