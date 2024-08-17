/* eslint-disable @typescript-eslint/no-namespace */
import { Transcript } from '@/domain/models/video-transcript-model'

export interface LoadVideoTrancript {
  load: (params: TranscriptResponse.Params) => Promise<TranscriptResponse.Response>
}

export namespace TranscriptResponse {
  export type Response = Transcript[]
  export type Params = { videoID: string, languageCodes: string[] }
}
