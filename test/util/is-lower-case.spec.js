import test from 'tape';
import { range } from '../../src/util/range.js';
import { isLowerCase } from '../../src/util/is-lower-case.js';


test('checks if the provided ascii value is lower case', (t) => {
  t.equals(
    range(97, 122).every(isLowerCase),
    true
  );

  t.notEquals(
    range(65, 90).every(isLowerCase),
    true
  );

  t.end();
});
