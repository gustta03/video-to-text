import { Controller } from '@/presentation/protocols/controller'

import { Request, Response } from 'express'

export const adaptRoute = (controller: Controller) => {
  return async (req: Request, res: Response) => {
    const httpRequest = {
      body: req.body || {},
      accessToken: req.headers?.['x-access-token'],
      ...(req.params || {}),
      ...(req.query || {})
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse)
  }
}
