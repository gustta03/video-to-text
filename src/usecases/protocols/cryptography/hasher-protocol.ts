export interface Hasher {
  hash: (plaintext: string) => Promise<string>
}

export interface HashComparer {
  compare: (plaitext: string, digest: string) => Promise<boolean>
}
