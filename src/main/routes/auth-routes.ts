import { adaptRoute } from "@/main/adapters";

import { Router } from "express";
import { makeAddAccountController } from "../factories/controller/add-account-controller";
import { makeLoadAccount } from "../factories/controller/load-account-controller";
import { makeAccountLoadAccountController } from "../factories/controller/account-load-by-token-controller";

export default (router: Router): void => {
  router.post("/create/account", adaptRoute(makeAddAccountController()));
  router.post("/account/login", adaptRoute(makeLoadAccount()));
  router.get("/me", adaptRoute(makeAccountLoadAccountController()));
};
