//libraries
import {React, useState} from "react";
import {GDGDPRatio} from '../../libs/Formulae';
//components
import CalcName from '../CalcName';
import BackBtn from "../BackBtn";
import InputDisplay from "../InputDisplay";
import CalcBtn from "../CalcBtn";
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";

const GovDebtGDPRatio = ({unitOfMeasurement}) => {
    const [governmentDebt, setGovernmentDebt] = useState(0);
    const [gdp, setGDP] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'Government Debt to GDP Ratio Calculator';
    const vname1 = 'Government Debt';
    const vname2 = 'GDP';
    const solName = 'Government Debt:GDP Ratio';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setGovernmentDebt(value);
        }
        else if (variableName === vname2) {
            setGDP(value);
        };
    };

    const calculateHandler = () => {
        const calc = new GDGDPRatio(governmentDebt, gdp, unitOfMeasurement);
        setSolution(calc.solve());
    };
    return (
        <div>
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/ratios'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={governmentDebt}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={gdp}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default GovDebtGDPRatio;