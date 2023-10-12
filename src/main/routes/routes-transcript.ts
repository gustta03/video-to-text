import { makeTranscription } from '@/main/factories/controller/make-trascription-controller'
import { adaptRoute } from '@/main/adapters'
import { Router } from 'express'
import { makeGetMeaningController } from '../factories/controller/make-get-meaning-controller'

export default (router: Router): void => {
  router.get('/transcription/video/:id', adaptRoute(makeTranscription()))
  router.get('/meaning/word/:word', adaptRoute(makeGetMeaningController()))
}
