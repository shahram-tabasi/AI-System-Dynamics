import { SimulationEngine } from "../simulation/SimulationEngine";
import { SimulationFactory } from "../simulation/SimulationFactory";
import { DummyAI } from "../simulation/DummyAI";
import { OpenAIService } from "./OpenAIService";

export class SimulationService {

    private engine: SimulationEngine;

    constructor() {

        this.engine =
            new SimulationEngine(
                SimulationFactory.createInitialState()
            );

    }

    getState() {

    return this.engine.getState();

}


getHistory() {

    return this.engine.getHistory();

}


reset() {

    this.engine =
        new SimulationEngine(
            SimulationFactory.createInitialState()
        );

}


async nextWeek() {

    const ai = await OpenAIService.decide(

        this.engine.getState()

    );

    return this.engine.step(ai);

}

runSimulation(weeks:number){

    this.engine.run(

        weeks,

        DummyAI.decide

    );

}

}