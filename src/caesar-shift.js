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
  // 1. Identify each character.
  // 2. convert each char to ascii number code
  // 3. check if each char code is alpha
  // 4. if char code is not alpha then do nothing do it
  // 5. if char code is alpha then increment char code by key 'x = c + k'
  // 6. convert each char code in to string char
  // 7. concat all chars into a string.
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
