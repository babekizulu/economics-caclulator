//libraries
import {React, useState} from "react";
import {BalanceOfTradeFormula} from '../../libs/Formulae';
//components
import InputDisplay from "../InputDisplay";
import CalcBtn from "../CalcBtn";
import SolutionDisplay from "../SolutionDisplay";

const BalanceOfTrade = () => {
    const [exportsValue, setExportsValue] = useState(0);
    const [importsValue, setImportsValue] = useState(0);
    const [solution, setSolution] = useState(0);

    const onChangeHandler = (variableName, e) => {
        if (variableName === 'exportsValue') {
            setExportsValue(e.target.value);
        }
        else if (variableName === 'importsValue') {
            setImportsValue(e.target.value);
        }
    }

    const calculateHandler = () => {
        const calc = new BalanceOfTradeFormula(exportsValue, importsValue);
        setSolution(calc.solve());
    }
    
    return (
        <div className="calculator">
            <InputDisplay 
            variableName='exportsValue' 
            onChangeHandler={onChangeHandler}
            inputState={exportsValue}
            />
            <InputDisplay
            variableName='importsValue'
            onChangeHandler={onChangeHandler}
            inputState={importsValue}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default BalanceOfTrade;