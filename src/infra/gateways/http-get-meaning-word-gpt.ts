/* eslint-disable @typescript-eslint/explicit-function-return-type */
import env from "../../main/config/env";
import { GoogleGenerativeAI } from "@google/generative-ai";

export class MeaningWord {
  private readonly gemini: GoogleGenerativeAI;

  constructor(apiKey = env.geminApiKey) {
    this.gemini = new GoogleGenerativeAI(apiKey);
  }

  async MeaningWordFromGpt(word: string) {
    try {
      const model = this.gemini.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

      const result = await model.generateContent(
        `Explique de forma resumida o singificando com exemplos e contextos da palavra ingles: ${word}`
      );
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}
