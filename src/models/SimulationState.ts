export enum ManagementStrategy {
    Conservative = "Conservative",
    Balanced = "Balanced",
    Aggressive = "Aggressive"
}

export interface SimulationState {

    week:number;

    motivation:number;

    training:number;

    skill:number;

    productivity:number;

    progress:number;

    customerSatisfaction:number;

    burnout:number;

    budget:number;

    employees:number;

    strategy:ManagementStrategy;
}