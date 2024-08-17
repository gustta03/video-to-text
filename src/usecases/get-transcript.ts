import { HttpLoadTranscript } from "./protocols/db/http-load-transcript";
import {
  LoadVideoTrancript,
  TranscriptResponse,
} from "./protocols/get-transcript-protocol";

export class TranscriptVideo implements LoadVideoTrancript {
  constructor(private readonly loasTranscriptGateWay: HttpLoadTranscript) {}

  async load({
    videoID,
    languageCodes,
  }: TranscriptResponse.Params): Promise<TranscriptResponse.Response> {
    return await this.loasTranscriptGateWay.getSubtitles(
      videoID,
      languageCodes
    );
  }
}
