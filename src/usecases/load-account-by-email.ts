// import { DbLoadByTokenRepository } from '../usecases/protocols/db/db-load-account-by-token'
import { LoadAccountByEmailRepo } from "./protocols/db/db-load-account-by-email";
import {
  LoadAccountByEmail,
  LoadUserByEmail,
} from "./protocols/db-load-account-by-email";
import { Encrypter } from "./protocols/cryptography/encripter-protocol";
import { HashComparer } from "./protocols/cryptography/hasher-protocol";

export class DbLoadAccountByEmail implements LoadAccountByEmail {
  constructor(
    private readonly encrypter: Encrypter,
    private readonly hashComparer: HashComparer,
    private readonly loadAccountByEmailRepository: LoadAccountByEmailRepo
  ) {}

  async find(param: LoadUserByEmail.Param): Promise<any> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(
      param.email
    );
    if (account) {
      const isValid = await this.hashComparer.compare(
        param.password,
        account.password
      );
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(
          account._id.toString()
        );
        return accessToken;
      }
    }
    return null;
  }
}
