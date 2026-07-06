import { SimulationState } from "../models/SimulationState";

export class PromptBuilder {

    static build(state: SimulationState): string {

        return `
You are an experienced project manager.

Current project state:

Week: ${state.week}

Motivation: ${state.motivation}

Skill: ${state.skill}

Burnout: ${state.burnout}

Budget: ${state.budget}

Employees: ${state.employees}

Progress: ${state.progress}

Customer Satisfaction: ${state.customerSatisfaction}

Rules:

Return ONLY JSON.

Schema:

{
"motivationDelta":number,
"training":boolean,
"hire":boolean,
"overtime":boolean,
"budgetDelta":number,
"comment":string,
"confidence":number
}
`;

    }

}