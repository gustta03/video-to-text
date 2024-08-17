/* eslint-disable @typescript-eslint/no-namespace */
import { Transcript } from '@/domain/models/video-transcript-model'

export interface HttpLoadTranscript {
  getSubtitles: (videoId: string, languageCodes: string[]) => Promise<any>
}

export namespace TranscriptVideoHttpResponse {
  export type Response = Transcript[]
}
