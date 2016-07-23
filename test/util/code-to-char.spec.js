import test from 'tape';
import { codeToChar } from '../../src/util/code-to-char.js';


test('converts a unicode value in to its equivalent string representation', (t) => {
  t.equals(codeToChar(97), 'a');
  t.equals(codeToChar(65), 'A');
  t.end();
});
