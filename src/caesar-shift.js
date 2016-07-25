import { charToCode } from './util/char-to-code.js'
import { guard } from './util/guard.js';
import { isAlpha } from './util/is-alpha.js';
import { identity } from './util/identity.js';
import { shiftCode } from './util/shift-code.js';
import { codeToChar } from './util/code-to-char.js'
import { compose } from './util/compose.js';
import { map } from './util/map.js';
import { split } from './util/split.js';
import { join } from './util/join.js';


/**
 * Encrypt a message using the Caesar cipher
 *
 * @name encrypt
 * @function
 * @param {Number} key the number of positions to shift each character in the message by
 * @param {String} message the message to encrypt
 * @returns {String} the encrypted message
 */
export function encrypt(key, message) {
  if (key < 0) {
    throw new TypeError('Expected key to be a non-negative number');
  }
  const shift = guard(identity, shiftCode.bind(shiftCode, key), isAlpha);
  const encode = compose(codeToChar, shift, charToCode)
  return join('', map(encode, split('', message)));
}

/**
 * Decrypt a message thats been encrypted using the Caesar cipher
 *
 * @name decrypt
 * @function
 * @param {Number} key the key used to decrypt the message
 * @param {String} message the message to decrypt
 * @returns {String} the decrypted message
 */
export function decrypt(key, message) {
  if (key < 0) {
    throw new TypeError('Expected key to be a non-negative number');
  }

  return encrypt(26 - key, message);
}
