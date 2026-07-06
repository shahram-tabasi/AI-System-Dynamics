// src/services/OpenAIService.ts

import OpenAI from "openai";
import { z } from "zod";
import { SimulationState } from "../models/SimulationState";
import { PromptBuilder } from "./PromptBuilder";
import { AIResponse } from "../models/AIResponse";

let client: OpenAI | null = null;

function getClient(): OpenAI {
  if (!client) {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error(
        "VITE_OPENAI_API_KEY is missing. Create a .env file."
      );
    }

    client = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true,
    });
  }

  return client;
}

const schema = z.object({
  motivationDelta: z.number(),
  training: z.boolean(),
  hire: z.boolean(),
  overtime: z.boolean(),
  budgetDelta: z.number(),
  comment: z.string(),
  confidence: z.number().min(0).max(100),
});

export class OpenAIService {
  static async decide(
    state: SimulationState
  ): Promise<AIResponse> {
    const response = await getClient().responses.parse({
      model: "gpt-4.1-mini",

      input: [
        {
          role: "system",
          content:
            "You are a senior software project manager. Return ONLY valid JSON.",
        },
        {
          role: "user",
          content: PromptBuilder.build(state),
        },
      ],

      text: {
        format: {
          type: "json_schema",
          name: "manager_decision",
          schema: {
            type: "object",
            additionalProperties: false,
            properties: {
              motivationDelta: { type: "number" },
              training: { type: "boolean" },
              hire: { type: "boolean" },
              overtime: { type: "boolean" },
              budgetDelta: { type: "number" },
              comment: { type: "string" },
              confidence: { type: "number" },
            },
            required: [
              "motivationDelta",
              "training",
              "hire",
              "overtime",
              "budgetDelta",
              "comment",
              "confidence",
            ],
          },
        },
      },
    });

    return schema.parse(response.output_parsed);
  }
}