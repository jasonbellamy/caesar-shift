/**
 * Convert a list in to a string with/at the provided seperator
 *
 * @name join
 * @function
 * @param {String} x the seperator to split/combine the string with
 * @param {Array} xs the array to join
 * @returns {String} the new string
 */
export function join(x, xs) {
  return xs.join(x);
}
