import test from 'tape';
import { guard } from '../../src/util/guard.js';


test('invokes either the first or second arguments function depending on if the predicate functions return value is true or false', (t) => {
  const func1 = (x) => 1;
  const func2 = (x) => 2;
  const predicate = (x) => x === 1;

  t.equals(
    guard(func1, func2, predicate)(1),
    2
  );

  t.equals(
    guard(func1, func2, predicate)(2),
    1
  );
  t.end();
});
