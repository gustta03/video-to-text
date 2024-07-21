/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { CreateCustomerFromOrder } from "@/presentation/controllers/hook-orders";
import { makeAddAccountUseCase } from "../usecases/add-account-factory";

export const makeAddCustomerController = () => {
  return new CreateCustomerFromOrder(makeAddAccountUseCase());
};
