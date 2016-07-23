import test from 'tape';
import { encrypt, decrypt } from '../src/caesar-shift.js';


test('encrypt only accepts a non-negative integer as a key', (t) => {
  t.throws(
    encrypt(-1, 'abcdefghijjklmnopqrstuvwxy')
  );
  t.end();
});

test('encrypt shifts each alphabetical character by the specified key', (t) => {
  t.equal(
    encrypt(1, 'abcdefghijjklmnopqrstuvwxy'),
    'bcdefghijkklmnopqrstuvwxyz'
  );
  t.equal(
    encrypt(14, 'abcdefghijjklmnopqrstuvwxy'),
    'opqrstuvwxxyzabcdefghijklm'
  );
  t.equal(
    encrypt(26, 'abcdefghijjklmnopqrstuvwxy'),
    'abcdefghijjklmnopqrstuvwxy'
  );
  t.end();
});

test('encrypt does not shift a non alphabetical character', (t) => {
  t.equal(
    encrypt(1, '0123456789!@#$%^&*()'),
    '0123456789!@#$%^&*()'
  );
  t.end();
});

test('encrypt maintains the current case of each character', (t) => {
  t.equal(
    encrypt(1, 'aBcDeFgHiJkLmNoPqRsTuVwXyZ'),
    'bCdEfGhIjKlMnOpQrStUvWxYzA'
  );
  t.end();
});
