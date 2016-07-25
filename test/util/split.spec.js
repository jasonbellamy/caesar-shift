import test from 'tape';
import { split } from '../../src/util/split.js';


test('turn a string in to an array with a single char in each key', (t) => {
  t.deepEquals(split('.', 'a.b.c.xyz.d'), ['a', 'b', 'c', 'xyz', 'd'])
  t.end();
});
