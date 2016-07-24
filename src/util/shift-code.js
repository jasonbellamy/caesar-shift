import { isUpperCase } from './is-upper-case.js';
import { isAlpha } from './is-alpha.js';


/**
 * Shift the position of the code parameter by the value of the key parameter
 *
 * @name shiftCode
 * @function
 * @param {Number} key the number to shift the code by
 * @param {Number} code the code to be shifted
 * @returns {Number} the shifted code
 */
export function shiftCode(key, code) {
  if (!isAlpha(code)) {
    throw new TypeError('Expected an alphabetical code');
  }

  const constraint = isUpperCase(code) ? 65 : 97;
  return ((code - constraint + key) % 26) + constraint;
}
