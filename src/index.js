import Reference from '@ngnjs/plugin'
import {
  generateKeys,
  sign,
  verify,
  encrypt,
  decrypt,
  encryptJSON,
  decryptJSON,
  encryptionAlgorithm,
  base32
} from '@ngnjs/libcrypto'

const NGN = new Reference()

const crypto = {
  generateKeys,
  sign,
  verify,
  encrypt,
  decrypt,
  encryptionAlgorithm,
  base32
}

NGN.export('crypto', crypto)

export {
  crypto as default,
  generateKeys,
  sign,
  verify,
  encrypt,
  decrypt,
  encryptionAlgorithm,
  base32
}
