import { charToCode } from './util/char-to-code.js'
import { guard } from './util/guard.js';
import { isAlpha } from './util/is-alpha.js';
import { identity } from './util/identity.js';
import { shiftCode } from './util/shift-code.js';
import { codeToChar } from './util/code-to-char.js'


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

  const processCode = guard(identity, shiftCode.bind(shiftCode, key), isAlpha);

  return message
    .split('')
    .map(charToCode)
    .map(processCode)
    .map(codeToChar)
    .join('');
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

}
