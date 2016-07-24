/**
 * Invokes either the first or second arguments function depending on if the predicate functions return value is true or false
 *
 * @name guard
 * @function
 * @param {Function} x the function to execute if the predicate is false
 * @param {Function} y the function to execute if the predicate is true
 * @param {Function} z the predicate function
 */
export function guard(x, y, z) {
  return function(...args) {
    return z.apply(z, args) ? y.apply(y, args) : x.apply(x, args);
  };
}
