import { SimulationState, ManagementStrategy } from "../models/SimulationState";

export class SimulationFactory{

    static createInitialState():SimulationState{

        return{

            week:1,

            motivation:70,

            training:0,

            skill:50,

            productivity:50,

            progress:0,

            customerSatisfaction:50,

            burnout:10,

            budget:100000,

            employees:10,

            strategy:ManagementStrategy.Balanced

        };

    }

}