/**
 * Apply a function to every item in the list and returns the result
 *
 * @name map
 * @function
 * @param {Function} x the function to apply
 * @param {Array} xs the list of items to apply the function to
 * @returns {Array} the new list
 */
export function map(x, xs) {
  return xs.map(x);
}
