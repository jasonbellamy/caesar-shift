/**
 * Check if the the provided unicode value is alphabetical
 *
 * @name isAlpha
 * @function
 * @param {Number} x the unicode number
 * @returns {Boolean} is the provided value alphabetical?
 */
export function isAlpha(x) {
  return (x >= 64 && x <= 90) || (x >= 97 && x <= 123);
}
