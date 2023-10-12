/* eslint-disable @typescript-eslint/explicit-function-return-type */
import env from '../../main/config/env'
import { OpenAI } from 'openai'

export class MeaningWord {
  private readonly openai: OpenAI

  constructor (apiKey = env.openIAKey) {
    this.openai = new OpenAI({ apiKey })
  }

  async MeaningWordFromGpt (word: string) {
    try {
      const completion = await this.openai.chat.completions.create({
        messages: [
          {
            role: 'user',
            content: `explique resumidamente a palavra ingles: ${word}`
          }
        ],
        model: 'gpt-3.5-turbo'
      })

      return completion.choices[0].message.content
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }
}
