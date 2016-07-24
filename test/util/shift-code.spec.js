import test from 'tape';
import { shiftCode } from '../../src/util/shift-code.js';


test('Shift the position of the ascii code by the value of provided key parameter', (t) => {
  t.equals(
    shiftCode(1, 65),
    66
  );

  t.equals(
    shiftCode(26, 65),
    65
  );

  t.equals(
    shiftCode(1, 90),
    65
  );

  t.equals(
    shiftCode(1, 97),
    98
  );

  t.equals(
    shiftCode(26, 97),
    97
  );

  t.equals(
    shiftCode(1, 122),
    97
  );

  t.end();
});

test('throws if a non alphabetical char code is provided', (t) => {
  t.throws(
    shiftCode.bind(shiftCode, 1, 1),
    TypeError
  );

  t.end();
});
