import asJWK from '../runtime/key_to_jwk.js'

import type { JWK, KeyLike } from '../types.d'

/**
 * Converts a runtime-specific key representation (KeyLike) to a JWK.
 *
 * @param key Key representation to transform to a JWK.
 *
 * @example ESM import
 * ```js
 * import { fromKeyLike } from 'jose/jwk/from_key_like'
 * ```
 *
 * @example CJS import
 * ```js
 * const { fromKeyLike } = require('jose/jwk/from_key_like')
 * ```
 *
 * @example Deno import
 * ```js
 * import { fromKeyLike } from 'https://deno.land/x/jose@VERSION/jwk/from_key_like.ts'
 * ```
 *
 * @example Usage
 * ```js
 * const privateJwk = await fromKeyLike(privateKey)
 * const publicJwk = await fromKeyLike(publicKey)
 *
 * console.log(privateJwk)
 * console.log(publicJwk)
 * ```
 */
async function fromKeyLike(key: KeyLike): Promise<JWK> {
  return asJWK(key)
}

export { fromKeyLike }
export default fromKeyLike
export type { KeyLike, JWK }
