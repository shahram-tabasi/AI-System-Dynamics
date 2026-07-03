import { AIResponse } from "../models/AIResponse";
import { SimulationState } from "../models/SimulationState";

export class DummyAI {

    static decide(state:SimulationState):AIResponse{

        return{

            motivationDelta:1,

            training:state.skill<70,

            hire:false,

            overtime:state.progress<80,

            budgetDelta:0,

            comment:"Dummy AI"

        };

    }

}
