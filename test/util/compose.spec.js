import test from 'tape';
import { compose } from '../../src/util/compose.js';


test('returns the final result of all the provided function parameters', (t) => {
  const addOne   = (a) => a + 1;
  const addTwo   = (a) => a + 2;
  const addThree = (a) => a + 3;

  t.equals(compose(addOne, addTwo, addThree)(15), 21);
  t.end();
});
