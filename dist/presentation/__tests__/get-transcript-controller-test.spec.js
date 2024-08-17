"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_transcript_controller_1 = require("../controllers/get-transcript-controller");
class TranscriptionUseCaseStub {
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
    async load() {
        return this.data;
    }
}
const makeSut = () => {
    const transcriptionUseCase = new TranscriptionUseCaseStub();
    const transcriptionController = new get_transcript_controller_1.GetTranscriptController(transcriptionUseCase);
    return {
        transcriptionController
    };
};
describe('TranscriptController', () => {
    test('should return a list of transcription', async () => {
        const { transcriptionController } = makeSut();
        const request = await transcriptionController.handle({ videoID: 'any-id' });
        expect(request.statusCode).toBe(200);
        expect(request.body[0]).toHaveProperty('subtitles');
    });
    test('should throw an error when video transcript are no found', async () => {
        const mockLoadTranscriptUseCase = {
            load: jest.fn().mockImplementation(() => {
                throw new Error('Mocked error');
            })
        };
        const controller = new get_transcript_controller_1.GetTranscriptController(mockLoadTranscriptUseCase);
        try {
            await controller.handle({});
        }
        catch (error) {
            expect(error.message).toBe('Mocked error');
        }
        expect(mockLoadTranscriptUseCase.load).toHaveBeenCalledTimes(1);
    });
});
