import { SimulationEngine } from "../simulation/SimulationEngine";
import { SimulationFactory } from "../simulation/SimulationFactory";
import { DummyAI } from "../simulation/DummyAI";

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


nextWeek() {

    return this.engine.step(

        DummyAI.decide(

            this.engine.getState()

        )

    );

}

runSimulation(weeks:number){

    this.engine.run(

        weeks,

        DummyAI.decide

    );

}

}