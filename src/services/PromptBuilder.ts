// src/services/PromptBuilder.ts

import { SimulationState } from "../models/SimulationState";

export class PromptBuilder {

    static build(state: SimulationState): string {

        return `
You are managing a software engineering company.

Current State

Week: ${state.week}

Motivation: ${state.motivation}

Skill: ${state.skill}

Productivity: ${state.productivity}

Progress: ${state.progress}

Customer Satisfaction: ${state.customerSatisfaction}

Burnout: ${state.burnout}

Budget: ${state.budget}

Employees: ${state.employees}

Your goal

- maximize productivity
- maximize customer satisfaction
- minimize burnout
- keep budget positive

Return ONLY JSON.
`;

    }

}