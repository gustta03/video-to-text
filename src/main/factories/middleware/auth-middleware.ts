import { makeDbLoadAccountByToken } from '@/main/factories/usecases/make-db-load-by-token'
import { Middleware } from '../../../presentation/protocols/middleware'
import { AuthMiddleware } from '../../../presentation/middleware/auth-middleware'

export const makeAuthMiddleware = (role?: string): Middleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken())
}
