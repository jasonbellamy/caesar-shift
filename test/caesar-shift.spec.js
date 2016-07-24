import test from 'tape';
import { encrypt, decrypt } from '../src/caesar-shift.js';


test('encrypt only accepts a non-negative integer as a key', (t) => {
  t.throws(
    encrypt.bind(encrypt, -1, 'abcdefghijjklmnopqrstuvwxy')
  );
  t.end();
});

test('encrypt shifts each alphabetical character by the specified key', (t) => {
  t.equal(
    encrypt(1, 'abcdefghijjklmnopqrstuvwxyz'),
    'bcdefghijkklmnopqrstuvwxyza'
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

test('decrypt only accepts a non-negative integer as a key', (t) => {
  t.throws(
    decrypt.bind(decrypt, -1, 'opqrstuvwxxyzabcdefghijklm')
  );
  t.end();
});

test('decrypts an encrypted message if the correct key is provided', (t) => {
  t.equal(
    decrypt(1, 'bcdefghijkklmnopqrstuvwxyza'),
    'abcdefghijjklmnopqrstuvwxyz'
  );
  t.equal(
    decrypt(14, 'opqrstuvwxxyzabcdefghijklm'),
    'abcdefghijjklmnopqrstuvwxy'
  );
  t.equal(
    decrypt(26, 'abcdefghijjklmnopqrstuvwxyz'),
    'abcdefghijjklmnopqrstuvwxyz'
  );
  t.end();
});
