import { useMemo } from "react";
import { SimulationService } from "../services/SimulationService";

export function useSimulation(){

    return useMemo(

        ()=>new SimulationService(),

        []

    );

}