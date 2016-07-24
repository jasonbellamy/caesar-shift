import test from 'tape';
import { identity } from '../../src/util/identity.js';


test('returns the parameter supplied to it', (t) => {
  const number = 1;
  t.equals(
    identity(number),
    number
  );

  const string = 'a';
  t.equals(
    identity(string),
    string
  );

  const array = [1, 2, 3, 4, 5];
  t.deepEquals(
    identity(array),
    array
  );

  const object = { key: 'value' };
  t.deepEquals(
    identity(object),
    object
  );

  const func = (x) => x + x;
  t.deepEquals(
    identity(func),
    func
  );

  t.end();
});
