import { SimulationConstants } from "./Constants";

export class Equation {
    static calculateSkill(
    currentSkill: number,
    training: boolean
): number {

    let skill = currentSkill;

    if (training) {
        skill += SimulationConstants.TrainingSkillGain;
    }

    return Math.min(skill, SimulationConstants.MaxSkill);
}


static calculateMotivation(
    currentMotivation:number,
    delta:number,
    burnout:number
):number{

    let motivation =
        currentMotivation +
        delta -
        burnout*0.15;

    motivation=Math.max(0,motivation);

    motivation=Math.min(
        motivation,
        SimulationConstants.MaxMotivation
    );

    return motivation;
}


static calculateProductivity(

    skill:number,

    motivation:number

):number{

    return (
        skill*0.55 +
        motivation*0.45
    );

}


static calculateBurnout(

    current:number,

    overtime:boolean

):number{

    let burnout=current;

    burnout+=SimulationConstants.BurnoutIncrease;

    if(overtime){

        burnout+=4;

    }

    burnout=Math.min(

        burnout,

        SimulationConstants.MaxBurnout

    );

    return burnout;

}


static calculateProgress(

    current:number,

    productivity:number

):number{

    return Math.min(

        100,

        current + productivity*0.08

    );

}


static calculateCustomerSatisfaction(

    progress:number,

    motivation:number

):number{

    return Math.min(

        100,

        progress*0.6 +

        motivation*0.4

    );

}


static calculateBudget(

    current:number,

    hire:boolean,

    training:boolean

):number{

    let budget=current;

    if(hire){

        budget-=SimulationConstants.HiringCost;

    }

    if(training){

        budget-=SimulationConstants.TrainingCost;

    }

    return budget;

}

}

