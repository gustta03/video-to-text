import { adaptRoute } from '@/main/adapters'
import { Router } from 'express'
import { makeAddHistoryController } from '../factories/controller/make-add-history-controller'
import { makeGetAllHistoryController } from '../factories/controller/make-get-all-history-controller'

export default (router: Router): void => {
  router.post('/video/history', adaptRoute(makeAddHistoryController()))
  router.get('/videos/all/history/pages', adaptRoute(makeGetAllHistoryController()))
}
