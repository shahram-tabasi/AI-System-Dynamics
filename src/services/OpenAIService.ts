import OpenAI from "openai";
import { z } from "zod";
import { SimulationState } from "../models/SimulationState";
import { PromptBuilder } from "./PromptBuilder";
import { AIResponse } from "../models/AIResponse";

const client = new OpenAI({

    apiKey: import.meta.env.VITE_OPENAI_API_KEY,

    dangerouslyAllowBrowser: true

});

const ResponseSchema = z.object({

    motivationDelta: z.number(),

    training: z.boolean(),

    hire: z.boolean(),

    overtime: z.boolean(),

    budgetDelta: z.number(),

    comment: z.string(),

    confidence: z.number()

});

export class OpenAIService {

    static async decide(

        state: SimulationState

    ): Promise<AIResponse> {

        const response = await client.responses.create({

            model: "gpt-4.1-mini",

            temperature: 0.3,

            input: PromptBuilder.build(state)

        });

        const text = response.output_text;

        return ResponseSchema.parse(JSON.parse(text));

    }

}