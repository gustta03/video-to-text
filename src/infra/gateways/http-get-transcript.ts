/* eslint-disable @typescript-eslint/prefer-optional-chain */
import striptags from "striptags";
import * as HTTPUtil from "../util/http-request-util";

interface CaptionTrack {
  vssId: string;
  baseUrl: string;
}

export interface Line {
  start: string;
  dur: string;
  text: string;
}

export class SubtitleService {
  constructor(private readonly request = new HTTPUtil.Request()) {}

  async getSubtitles(videoID: string, languageCodes: string[]): Promise<any> {
    const { data } = await this.request.get<string>(
      `https://youtube.com/watch?v=${videoID}`
    );
    const match = /"captionTracks":(.*?)]/.exec(data);

    if (!match || match.length < 2) {
      throw new Error("Could not find captionTracks in the response");
    }

    const jsonString = match[1] + "]";
    const captionTracks: CaptionTrack[] = JSON.parse(jsonString);

    const subtitlesWithTitles: Array<{
      title: string;
      subtitles: { en: Line[] };
    }> = [];

    for (const languageCode of languageCodes) {
      const subtitle = captionTracks.find(({ vssId }) =>
        vssId?.match(`.${languageCode.replace(/'/g, "&#39;")}`)
      );

      if (subtitle) {
        const { data: transcript } = await this.request.get<string>(
          subtitle.baseUrl
        );
        const lines = this.parseTranscript(transcript);

        if (languageCode === "pt" && lines.length > 0) {
          lines.shift();
        }

        const { data: videoInfo } = await this.request.get<{ title: string }>(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoID}&format=json`
        );
        const videoTitle = videoInfo.title;

        subtitlesWithTitles.push({
          title: videoTitle,
          subtitles: { en: lines },
        });
      }
    }

    return subtitlesWithTitles;
  }

  private parseTranscript(transcript: string): Line[] {
    return transcript
      .replace('<?xml version="1.0" encoding="utf-8" ?><transcript>', "")
      .replace("</transcript>", "")
      .split("</text>")
      .filter((line) => line && line.trim())
      .map((line) => {
        const startRegex = /start="([\d.]+)"/;
        const durRegex = /dur="([\d.]+)"/;

        const startMatch = startRegex.exec(line);
        const durMatch = durRegex.exec(line);

        const start = startMatch ? startMatch[1] : "0";
        const dur = durMatch ? durMatch[1] : "0";

        const decodedText = line
          .replace(/<text.+>/, "")
          .replace(/&amp;/gi, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&#39;/g, "'")
          .replace(/&quot;/g, '"');

        const text = striptags(decodedText);

        return {
          start,
          dur,
          text,
        };
      });
  }
}
