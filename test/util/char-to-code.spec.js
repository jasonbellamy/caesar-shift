import test from 'tape';
import { charToCode } from '../../src/util/char-to-code.js';


test('converts a char in to its unicode equivalent value', (t) => {
  t.equals(charToCode('a'), 97);
  t.equals(charToCode('A'), 65);
  t.end();
});
