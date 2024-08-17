"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_transcript_1 = require("../get-transcript");
class TranscriptionHttpRequestStub {
    constructor() {
        this.data = [
            {
                title: 'Rodrigo Santoro on Heleno and His Heartthrob Status',
                subtitles: {
                    en: [
                        {
                            start: '0.999',
                            dur: '9.071',
                            text: "what is a hard throw oh let's look at"
                        }
                    ]
                }
            }
        ];
    }
    async getSubtitles() {
        return this.data;
    }
}
const makeSut = () => {
    const transcriptionRequest = new TranscriptionHttpRequestStub();
    const transcriptionUseCase = new get_transcript_1.TranscriptVideo(transcriptionRequest);
    return {
        transcriptionUseCase
    };
};
describe('TranscriptController', () => {
    test('should return a list of transcription when load methode is invoked', async () => {
        const { transcriptionUseCase } = makeSut();
        const request = await transcriptionUseCase.load({
            videoID: 'any-id',
            languageCodes: ['en']
        });
        expect(request[0].title).toBeDefined();
    });
    test('should throw an error when video transcript are no found', async () => {
        const mockLoadTranscriptUseCase = {
            getSubtitles: jest.fn().mockImplementation(() => {
                throw new Error('Transcription not found');
            })
        };
        const transcriptionUseCase = new get_transcript_1.TranscriptVideo(mockLoadTranscriptUseCase);
        try {
            await transcriptionUseCase.load({
                videoID: 'invalid-id',
                languageCodes: ['en']
            });
        }
        catch (error) {
            expect(error.message).toBe('Transcription not found');
        }
        expect(mockLoadTranscriptUseCase.getSubtitles).toHaveBeenCalledTimes(1);
    });
});
