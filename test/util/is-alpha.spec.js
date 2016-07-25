import test from 'tape';
import { isAlpha } from '../../src/util/is-alpha.js';


test('checks if the provided unicode value is alphabetical', (t) => {
  t.equals(isAlpha(65), true);
  t.equals(isAlpha(90), true);
  t.equals(isAlpha(97), true);
  t.equals(isAlpha(122), true);
  t.equals(isAlpha('a'), false);
  t.equals(isAlpha('!'), false);
  t.equals(isAlpha('1'), false);
  t.equals(isAlpha(1), false);
  t.end();
});
