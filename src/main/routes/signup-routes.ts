import { adaptRoute } from '@/main/adapters'

import { Router } from 'express'
import { makeAddAccountController } from '../factories/controller/add-account-controller'

export default (router: Router): void => {
  router.post('/create/account', adaptRoute(makeAddAccountController()))
}
