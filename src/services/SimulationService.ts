// src/services/SimulationService.ts

import { AIResponse } from "../models/AIResponse";
import { OpenAIService } from "./OpenAIService";
import { SimulationEngine } from "../simulation/SimulationEngine";
import { SimulationFactory } from "../simulation/SimulationFactory";

export class SimulationService {

    private engine = new SimulationEngine(
        SimulationFactory.createInitialState()
    );

    getState() {
        return this.engine.getState();
    }

    getHistory() {
        return this.engine.getHistory();
    }

    reset() {
        this.engine = new SimulationEngine(
            SimulationFactory.createInitialState()
        );
    }

    step(ai: AIResponse) {
        return this.engine.step(ai);
    }

    async nextWeek() {

        const ai = await OpenAIService.decide(
            this.engine.getState()
        );

        const state = this.engine.step(ai);

        return {
            state,
            ai
        };

    }

}