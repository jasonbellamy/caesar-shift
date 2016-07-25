import test from 'tape';
import { map } from '../../src/util/map.js';


test('apply the provided function to each item in the provided list', (t) => {
  const addOne = (a) => a + 1;
  t.deepEquals(map(addOne, [1,2,3]), [2,3,4]);
  t.end();
});
