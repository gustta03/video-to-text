/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
import { adaptRoute } from "@/main/adapters";
import { Router } from "express";
import { makeUpdateCustomerStatus } from "../factories/controller/make-update-customer-controller";

export default (router: Router): void => {
  router.post(
    "/payment/active/customer",
    adaptRoute(makeUpdateCustomerStatus())
  );
};
