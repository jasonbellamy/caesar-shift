import { isLowerCase } from './is-lower-case.js';
import { isUpperCase } from './is-upper-case.js';


/**
 * Check if the the provided unicode value is alphabetical
 *
 * @name isAlpha
 * @function
 * @param {Number} x the unicode number
 * @returns {Boolean} is the provided value alphabetical?
 */
export function isAlpha(x) {
  return isLowerCase(x) || isUpperCase(x);
}
