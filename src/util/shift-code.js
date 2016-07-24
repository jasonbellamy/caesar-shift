import { isUpperCase } from './is-upper-case.js';
import { isAlpha } from './is-alpha.js';


export function shiftCode(key, code) {
  if (!isAlpha(code)) {
    throw new TypeError('Expected an alphabetical code');
  }

  const constraint = isUpperCase(code) ? 65 : 97;
  return ((code - constraint + key) % 26) + constraint;
}
