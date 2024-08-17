import JWT from 'jsonwebtoken'
import { MissingParamError } from '../../utils/errors/missing-param-error'
import { Decrypter, Encrypter } from '@/usecases/protocols/cryptography/encripter-protocol'

export class TokenGenerator implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {
    this.secret = secret
  }

  async encrypt (id: string): Promise<string> {
    if (!this.secret) {
      throw new MissingParamError('secret')
    }
    if (!id) {
      throw new MissingParamError('id')
    }
    return JWT.sign(id, this.secret)
  }

  async decrypt (value: any): Promise<any> {
    return JWT.verify(value, this.secret)
  }
}
