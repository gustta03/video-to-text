import { UpdateCustomerStatus } from "@/presentation/controllers/update-account-status-controller";
import { makeUpdateCustomerStatusUseCase } from "../usecases/make-update-customer-status";

export const makeUpdateCustomerStatus = () => {
  return new UpdateCustomerStatus(makeUpdateCustomerStatusUseCase());
};
