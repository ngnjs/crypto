import test from 'tappedout'
import NGN from 'ngn'
import '@ngnjs/crypto'

test('Sanity', t => {
  const { crypto } = NGN
  t.expect('object', typeof crypto, 'crypto object available from NGN')

  t.expect('function', typeof crypto.generateKeys, 'generateKeys function available')
  t.expect('function', typeof crypto.sign, 'sign function available')
  t.expect('function', typeof crypto.verify, 'verify function available')
  t.expect('function', typeof crypto.encrypt, 'encrypt function available')
  t.expect('function', typeof crypto.decrypt, 'decrypt function available')
  t.expect('function', typeof crypto.encryptJSON, 'encryptJSON function available')
  t.expect('function', typeof crypto.decryptJSON, 'decryptJSON function available')
  t.expect('function', typeof crypto.encryptionAlgorithm, 'encryptionAlgorithm function available')

  t.end()
})
