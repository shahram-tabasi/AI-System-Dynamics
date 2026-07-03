import { SimulationState } from "../models/SimulationState";
import { AIResponse } from "../models/AIResponse";
import { HistoryPoint } from "../models/HistoryPoint";
import { Equation } from "./Equation";

export class SimulationEngine {

    private currentState: SimulationState;

    private history: HistoryPoint[] = [];

    constructor(initialState: SimulationState){

    this.currentState = structuredClone(initialState);

    this.saveHistory();

}

private saveHistory(){

    this.history.push({

        state: structuredClone(this.currentState),

        timestamp: new Date()

    });

}


getState():SimulationState{

    return structuredClone(this.currentState);

}


getHistory():HistoryPoint[]{

    return structuredClone(this.history);

}


step(ai:AIResponse):SimulationState{

    const skill = Equation.calculateSkill(

    this.currentState.skill,

    ai.training

);

const burnout = Equation.calculateBurnout(

    this.currentState.burnout,

    ai.overtime

);

const motivation = Equation.calculateMotivation(

    this.currentState.motivation,

    ai.motivationDelta,

    burnout

);

const productivity = Equation.calculateProductivity(

    skill,

    motivation

);

const progress = Equation.calculateProgress(

    this.currentState.progress,

    productivity

);


const customer =

Equation.calculateCustomerSatisfaction(

    progress,

    motivation

);


const budget = Equation.calculateBudget(

    this.currentState.budget,

    ai.hire,

    ai.training

);

this.currentState = {

    ...this.currentState,

    week:this.currentState.week+1,

    skill,

    burnout,

    motivation,

    productivity,

    progress,

    customerSatisfaction:customer,

    budget

};

this.saveHistory();

return this.getState();

}

run(

    weeks:number,

    aiProvider:(state:SimulationState)=>AIResponse

){
    for(let i=0;i<weeks;i++){

    const ai =

        aiProvider(

            this.getState()

        );

    this.step(ai);

}

}

}