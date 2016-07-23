import test from 'tape';
import { range } from '../../src/util/range.js';
import { isUpperCase } from '../../src/util/is-upper-case.js';


test('checks if the provided ascii value is upper case', (t) => {
  t.equals(
    range(65, 90).every(isUpperCase),
    true
  );

  t.notEquals(
    range(97, 123).every(isUpperCase),
    true
  );

  t.end();
});
