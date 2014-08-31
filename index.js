'use strict';

/**
 * Regular expression for matching CSS @imports
 *
 * @api public
 */

module.exports = function () {
    return /@import\s+(?:url\s?\((?:[^)]+)\))|@import\s+(\'|")(?:.*)\1/gi;
};
