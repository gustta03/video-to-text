import { AddAccountRepository } from "@/infra/repositories/account/user-repository";
import { UpdateAccountStatusUseCase } from "@/usecases/db-update-account-status-usecase";

export const makeUpdateCustomerStatusUseCase = () => {
  const accountMongoRepository = new AddAccountRepository();
  return new UpdateAccountStatusUseCase(accountMongoRepository);
};
