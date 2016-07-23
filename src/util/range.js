/**
 * Creates a an array of numbers with the range of the provided parameters
 *
 * @name range
 * @function
 * @param {Number} x start of the range
 * @param {Number} y end of the range
 * @param {Array} xs = [] default storage array
 * @returns {Array} an array of numbers
 */
export function range(x, y, xs = []) {
  return (x > y) ? xs : range(x + 1, y, [...xs, x]);
}
