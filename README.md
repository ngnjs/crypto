<h1 align="center">NGN Crypto<br/><img src="https://img.shields.io/npm/v/@ngnjs/crypto?label=%40ngnjs/crypto&logo=npm&style=social"/></h1>

The NGN Cryptography plugin implements [libcrypto](https://github.com/ngnjs/libcrypto), making it accessible from NGN and for all other NGN plugins. The following libcrypto methods are available:

- `generateKeys()`
- `sign()`
- `verify()`
- `encrypt()`
- `decrypt()`
- `encryptionAlgorithm()`
- `JWT.createToken()`
- `JWT.verifyToken()`
- `base32`

**Notice:** libcrypto contains additional features which aren't commonly used. This plugin exposes the minimum number of functions required to cover the most common cryptography needs in the smallest package possible. The other functions can be imported directly from libcrypto into projects that need them.

The fundamental/basic example:

```javascript
import NGN from 'https://cdn.jsdelivr.net/npm/ngn@latest/index.js'
import 'https://cdn.jsdelivr.net/npm/@ngnjs/crypto/index.js'
// Alternative import:
// import crypto from 'https://cdn.jsdelivr.net/npm/@ngnjs/crypto/index.js'

// The crypto library is accessible from the NGN namespace
const crypto = NGN.plugins.crypto

// Key Generation
const { publicKey, privateKey } = await crypto.generateKeys()

// Content signing/verification
const content = 'my data'
const signature = await crypto.sign(content, privateKey)
const verified = await crypto.verify(content, signature, publicKey)

// Shared key encryption
const sharedKey = 'my secret'
const encrypted = await crypto.encrypt(content, sharedKey)
const decrypted = await crypto.decrypt(encrypted, sharedKey)

// Public key encryption/Private key decryption
const encrypted = await crypto.encrypt(content, publicKey)
const decrypted = await crypto.encrypt(content, privateKey)
```

For more specific examples and documentation, see the [libcrypto repository](https://github.com/ngnjs/libcrypto).
