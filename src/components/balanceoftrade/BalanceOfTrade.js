//libraries
import {React, useState} from "react";
import {BalanceOfTradeFormula} from '../../libs/Formulae';
//components
import CalcName from "../CalcName";
import BackBtn from "../BackBtn";
import InputDisplay from "../InputDisplay";
import CalcBtn from "../CalcBtn";
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";

const BalanceOfTrade = () => {
    const [exportsValue, setExportsValue] = useState(0);
    const [importsValue, setImportsValue] = useState(0);
    const [solution, setSolution] = useState(0);

    //solution name
    const vname1 = 'Value of Exports';
    const vname2 = 'Value of Imports';
    const solname = 'Balance of Trade';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setExportsValue(value);
        }
        else if (variableName === vname2) {
            setImportsValue(value);
        }
    }

    const calculateHandler = () => {
        const calc = new BalanceOfTradeFormula(exportsValue, importsValue);
        setSolution(calc.solve());
    }
    
    return (
        <div className="bot-calculator-container">
            <CalcName calculatorName='Balance of Trade Calculator'/>
            <BackBtn prevDir='/'/>
            <InputDisplay 
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={exportsValue}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={importsValue}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName/>
            <SolutionName solutionName={solname}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default BalanceOfTrade;