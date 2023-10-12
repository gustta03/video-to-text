import { Hasher, HashComparer } from '@/usecases/protocols/cryptography/hasher-protocol'

import bcrypt from 'bcrypt'

export class BcryptHashAdapter implements Hasher, HashComparer {
  constructor (private readonly salt: number) {}

  async hash (plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, this.salt)
  }

  async compare (plaintext: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plaintext, digest)
  }
}
