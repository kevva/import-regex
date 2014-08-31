'use strict';

/**
 * Regular expression for matching CSS @imports
 *
 * @api public
 */

module.exports = function () {
    return /(^|\s)@import(\s|$)*(?:url\s?\((?:[^)]+)\))|(\'|")(?:.*)\1/gi;
};
