/**
 * Passes a result value from each function from right to left and returns the final result
 *
 * @name compose
 * @function
 * @param {Array} ...fns a list of functions
 * @returns {Mixed} the result of the functions
 */
export function compose(...fns) {
  function accumulator(count, args) {
    return count < 0 ? args : accumulator(count - 1, fns[count](args));
  }

  return function (...args) {
    return accumulator(fns.length - 1, ...args);
  };
}
