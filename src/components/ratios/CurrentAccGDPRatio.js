//libraries
import {React, useState} from "react";
import {CAGDPRatio} from '../../libs/Formulae';
import {currency} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from "../CalcName";
import BackBtn from "../BackBtn";
import InputDisplay from "../InputDisplay";
import Keyboard from "../Keyboard";
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";
import CalcBtn from "../CalcBtn";

const CurrentAccGDPRatio = ({
    unitOfMeasurement, 
    focusHandler,
    toggleKeyboard,
    keyboardVisibility,
    activeInput
}) => {
    const [currentAcc, setCurrentAcc] = useState(0);
    const [gdp, setGDP] = useState(0);
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
    }

    return (
        <div className="calculator">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/ratios'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={currentAcc}
            focusHandler={focusHandler}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={gdp}
            focusHandler={focusHandler}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             activeInput={activeInput}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default CurrentAccGDPRatio;