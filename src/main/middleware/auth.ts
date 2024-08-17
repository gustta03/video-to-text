import { adaptMiddleware } from '@/main/adapters/auth-middleware'
import { makeAuthMiddleware } from '@/main/factories/middleware/auth-middleware'

export const auth = adaptMiddleware(makeAuthMiddleware())
