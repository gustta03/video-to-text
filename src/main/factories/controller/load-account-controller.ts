/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { LoadAccountController } from '@/presentation/controllers/account-load-controller'
import { makeLoadAccountUseCase } from '../usecases/make-load-account-by-email'

export const makeLoadAccount = () => {
  return new LoadAccountController(makeLoadAccountUseCase())
}
