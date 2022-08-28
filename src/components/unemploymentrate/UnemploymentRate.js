//libraries
import {React, useState} from "react";
import {UnemploymentRateFormula} from '../../libs/Formulae';
//components
import CalcName from "../CalcName";
import BackBtn from "../BackBtn";
import InputDisplay from "../InputDisplay";
import CalcBtn from "../CalcBtn";
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";

const UnemploymentRate = ({unitOfMeasurement}) => {
    const [numberOfUnemployedPeople, setNumberOfUnemployedPeople] = useState(0);
    const [labourForce, setLabourForce] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'Unemployment Rate Calculator';
    const vname1 = 'Number of Unemployed People';
    const vname2 = 'Labour Force';
    const solName = 'Unemployment Rate';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setNumberOfUnemployedPeople(value);
        }
        else if (variableName === vname2) {
            setLabourForce(value);
        };
    };

    const calculateHandler = () => {
        const calc = new UnemploymentRateFormula(
            numberOfUnemployedPeople,
            labourForce,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    }

    return (
        <div className="calculator">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={numberOfUnemployedPeople}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={labourForce}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default UnemploymentRate;