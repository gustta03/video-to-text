import {
  AddAccont,
  AddAccount,
} from "../usecases/protocols/add-account-protocol";

import {
  GenerateToken,
  addAccountRepository,
  hashAccountPassoword,
} from "./protocols/db/db-add-account-protocols";
import { EmailValidator } from "./protocols/email-validator-protocol";

export class AddAccountUseCase implements AddAccount {
  constructor(
    private readonly addAccountRepository: addAccountRepository,
    private readonly emailValidadtor: EmailValidator,
    private readonly hashPassword: hashAccountPassoword,
    private readonly generateToken: GenerateToken
  ) {}

  async add(params: AddAccont.Params): Promise<AddAccont.Response> {
    const account = await this.addAccountRepository.loadByEmail(params.email);

    if (!this.emailValidadtor.isValid(params.email)) {
      throw new Error("Email invalid provided");
    }

    if (account) {
      return null;
    }

    const hashedPassword = await this.hashPassword.hash(params.password);
    const user = await this.addAccountRepository.add({
      email: params.email,
      password: hashedPassword,
      status: "inactive",
    });
    return await this.generateToken.encrypt(user);
  }
}
