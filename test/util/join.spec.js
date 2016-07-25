import test from 'tape';
import { join } from '../../src/util/join.js';


test('turn a list into a string with/at the provided parameter', (t) => {
  t.equals(join('-', [1,2,3,4]), '1-2-3-4');
  t.end();
});
