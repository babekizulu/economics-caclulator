//libraries
import {React, useState} from "react";
import {BalanceOfTradeFormula} from '../../libs/Formulae';
import { currency } from "../../libs/UnitsOfMeasurement";
//components
import CalcName from "../CalcName";
import BackBtn from "../BackBtn";
import InputDisplay from "../InputDisplay";
import Keyboard from "../Keyboard";
import CalcBtn from "../CalcBtn";
import ClearBtn from "../ClearBtn";
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";


const BalanceOfTrade = ({
    unitOfMeasurement, 
    toggleKeyboard, 
    keyboardVisibility
}) => {
    const [exportsValue, setExportsValue] = useState('');
    const [importsValue, setImportsValue] = useState('');
    const [solution, setSolution] = useState(0);

    //calculator name, variable names & solution name
    const calcName = 'Balance of Trade Calculator';
    const vname1 = `Value of Exports (${currency.rands})`;
    const vname2 = `Value of Imports (${currency.rands})`;
    const solname = `Balance of Trade`;

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setExportsValue(value);
        }
        else if (variableName === vname2) {
            setImportsValue(value);
        };
    };

    const calculateHandler = () => {
        const calc = new BalanceOfTradeFormula(exportsValue, importsValue, unitOfMeasurement);
        setSolution(calc.solve());
    };

    const onClearHandler = () => {
        setExportsValue('');
        setImportsValue('');
        setSolution(0);
    };

    const onKeyType = (targetInputField, keyNum) => {
        if (targetInputField === vname1) {
            setExportsValue(prevExportsValue => prevExportsValue += keyNum);
        }
        else if (targetInputField === vname2) {
            setImportsValue(prevImportsValue => prevImportsValue += keyNum);
        };
    };
    
    return (
        <div className="calc-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/'/>
            <InputDisplay 
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={exportsValue}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard}
             keyboardVisibility={keyboardVisibility}
             onKeyType={onKeyType}
             targetInputField={vname1}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={importsValue}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard}
             keyboardVisibility={keyboardVisibility}
             onKeyType={onKeyType}
             targetInputField={vname2}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solname}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default BalanceOfTrade;