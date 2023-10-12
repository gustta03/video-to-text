import {
  AddAccont,
  AddAccount
} from '../usecases/protocols/add-account-protocol'
import {
  GenerateToken,
  addAccountRepository,
  hashAccountPassoword
} from './protocols/db/db-add-account-protocols'
import { EmailValidator } from './protocols/email-validator-protocol'

export class AddAccountUseCase implements AddAccount {
  constructor (
    private readonly addAccountRepository: addAccountRepository,
    private readonly emailValidadtor: EmailValidator,
    private readonly hashPassword: hashAccountPassoword,
    private readonly generateToken: GenerateToken
  ) {}

  async add (params: AddAccont.Params): Promise<AddAccont.Response> {
    if (!this.emailValidadtor.isValid(params.email)) {
      throw new Error('Email invalid provided')
    }
    const hashedPassword = await this.hashPassword.hash(params.password)
    const user = await this.addAccountRepository.add({
      name: params.name,
      email: params.email,
      password: hashedPassword
    })
    return await this.generateToken.encrypt(user)
  }
}
