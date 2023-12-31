import { MeaningWordFromGptGateway } from '../protocols/gateway/http-load-meaning'
import { WordMeaningGpt } from '../protocols/get-meaning-protocol'

export class GetMeaningFromGptUseCase implements WordMeaningGpt {
  constructor (private readonly getMeaningFromGpt: MeaningWordFromGptGateway) {}
  async load (word: string): Promise<string> {
    try {
      const meaning = await this.getMeaningFromGpt.MeaningWordFromGpt(word)
      return meaning
    } catch (error) {
      throw new Error(`OpenIA Error: ${error}`)
    }
  }
}
