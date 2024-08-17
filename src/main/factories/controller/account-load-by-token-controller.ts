/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AddAccountController } from "@/presentation/controllers/add-account-controller";
import { makeAddAccountUseCase } from "../usecases/add-account-factory";
import { LoadAccountController } from "@/presentation/controllers/account-controller";
import { makeDbLoadAccountByToken } from "../usecases/make-db-load-by-token";

export const makeAccountLoadAccountController = () => {
  return new LoadAccountController(makeDbLoadAccountByToken());
};
