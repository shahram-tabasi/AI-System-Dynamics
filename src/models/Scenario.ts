import { ManagementStrategy } from "./SimulationState";

export interface Scenario{

    id:string;

    name:string;

    description:string;

    strategy:ManagementStrategy;

}