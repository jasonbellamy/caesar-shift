import test from 'tape';
import { range } from '../../src/util/range.js';


test('creates a new array of numbers within the range of the provided parameters', (t) => {
  t.deepEquals(
    range(0, 5),
    [0, 1, 2, 3, 4, 5]
  );

  t.end();
});
