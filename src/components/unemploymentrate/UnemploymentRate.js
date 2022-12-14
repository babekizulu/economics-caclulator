//libraries
import {React, useState} from "react";
import {UnemploymentRateFormula} from '../../libs/Formulae';
import {symbols} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from "../CalcName";
import BackBtn from "../BackBtn";
import InputDisplay from "../InputDisplay";
import CalcBtn from "../CalcBtn";
import ClearBtn from '../ClearBtn';
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";

const UnemploymentRate = ({
    unitOfMeasurement
}) => {
    const [numberOfUnemployedPeople, setNumberOfUnemployedPeople] = useState('');
    const [labourForce, setLabourForce] = useState('');
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'Unemployment Rate Calculator';
    const vname1 = `Number of Unemployed People (${symbols.n})`;
    const vname2 = `Labour Force (${symbols.n})`;
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
    };

    const onClearHandler = () => {
        setNumberOfUnemployedPeople('');
        setLabourForce('');
        setSolution(0);
    };

    return (
        <div className="calc-container">
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
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default UnemploymentRate;