export interface Decrypter {
  decrypt: (ciphertext: string) => Promise<string>
}

export interface Encrypter {
  encrypt: (plaintext: string) => Promise<string>
}
