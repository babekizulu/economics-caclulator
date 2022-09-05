//libraries
import {React, useState} from "react";
import {NetExportsFormula} from '../../libs/Formulae';
import {currency} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import Keyboard from "../Keyboard";
import CalcBtn from '../CalcBtn';
import ClearBtn from "../ClearBtn";
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const NetExports = ({
    unitOfMeasurement, 
    toggleKeyboard,
    keyboardVisibility
}) => {
    const [valueOfExports, setValueOfExports] = useState('');
    const [valueOfImports, setValueOfImports] = useState('');
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name 
    const calcName = 'Net Exports Calculator';
    const vname1 = `Value of Exports (${currency.rands})`;
    const vname2 = `Value of Imports (${currency.rands})`;
    const solName = 'Net Exports';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setValueOfExports(value);
        }
        else if (variableName === vname2) {
            setValueOfImports(value);
        }
    }
    const calculateHandler = () => {
        const calc = new NetExportsFormula(
            valueOfExports,
            valueOfImports,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    };

    const onClearHandler = () => {
        setValueOfExports('');
        setValueOfImports('');
        setSolution(0);
    };

    const onKeyType = (targetInputField, keyNum) => {
        if (targetInputField === vname1) {
            setValueOfExports(prevValueOfExports => prevValueOfExports += keyNum);
        }
        else if (targetInputField === vname2) {
            setValueOfImports(prevValueOfImports => prevValueOfImports += keyNum);
        };
    };

    return (
        <div className="calc-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/gdp'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={valueOfExports}
            />
            <Keyboard
            toggleKeyboard={toggleKeyboard} 
            keyboardVisibility={keyboardVisibility}
            targetInputField={vname1}
            onKeyType={onKeyType}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={valueOfImports}
            />
            <Keyboard
            toggleKeyboard={toggleKeyboard} 
            keyboardVisibility={keyboardVisibility}
            targetInputField={vname2}
            onKeyType={onKeyType}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default NetExports;