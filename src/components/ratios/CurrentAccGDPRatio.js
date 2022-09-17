//libraries
import {React, useState} from "react";
import {CAGDPRatio} from '../../libs/Formulae';
import {currency} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from "../CalcName";
import BackBtn from "../BackBtn";
import InputDisplay from "../InputDisplay";
import CalcBtn from "../CalcBtn";
import ClearBtn from '../ClearBtn';
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";


const CurrentAccGDPRatio = ({
    unitOfMeasurement
}) => {
    const [currentAcc, setCurrentAcc] = useState('');
    const [gdp, setGDP] = useState('');
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name 
    const calcName = 'Current Account to GDP Ratio Calculator';
    const vname1 = `Current Account (${currency.rands})`;
    const vname2 = `GDP (${currency.rands})`;
    const solName = 'Current Account:GDP Ratio';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setCurrentAcc(value);
        }
        else if (variableName === vname2) {
            setGDP(value);
        };
    };

    const calculateHandler = () => {
        const calc = new CAGDPRatio(currentAcc, gdp, unitOfMeasurement);
        setSolution(calc.solve());
    };

    const onClearHandler = () => {
        setCurrentAcc('');
        setGDP('');
        setSolution(0);
    };

    return (
        <div className="calc-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/ratios'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={currentAcc}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={gdp}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default CurrentAccGDPRatio;