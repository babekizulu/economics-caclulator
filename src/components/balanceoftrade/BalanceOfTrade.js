//libraries
import {React, useState} from "react";
import {BalanceOfTradeFormula} from '../../libs/Formulae';
import {currency} from '../../UnitsOfMeasurement';
//components
import CalcName from "../CalcName";
import BackBtn from "../BackBtn";
import InputDisplay from "../InputDisplay";
import CalcBtn from "../CalcBtn";
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";

const BalanceOfTrade = ({unitOfMeasurement}) => {
    const [exportsValue, setExportsValue] = useState(0);
    const [importsValue, setImportsValue] = useState(0);
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
        }
    }

    const calculateHandler = () => {
        const calc = new BalanceOfTradeFormula(exportsValue, importsValue, unitOfMeasurement);
        setSolution(calc.solve());
    }
    
    return (
        <div className="bot-calculator-container">
            <CalcName calculatorName={calcName}/>
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