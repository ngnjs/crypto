import Reference from '@ngnjs/plugin'
import {
  generateKeys,
  sign,
  verify,
  encrypt,
  decrypt,
  encryptJSON,
  decryptJSON,
  encryptionAlgorithm
} from '@ngnjs/libcrypto'

const NGN = new Reference()

const crypto = {
  generateKeys,
  sign,
  verify,
  encrypt,
  decrypt,
  encryptJSON,
  decryptJSON,
  encryptionAlgorithm
}

NGN.export('crypto', crypto)

export {
  crypto as default,
  generateKeys,
  sign,
  verify,
  encrypt,
  decrypt,
  encryptJSON,
  decryptJSON,
  encryptionAlgorithm
}