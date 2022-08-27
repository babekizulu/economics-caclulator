//libraries
import {React, useState} from "react";
import {NetExportsFormula} from '../../libs/Formulae';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import CalcBtn from '../CalcBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const NetExports = () => {
    const [valueOfExports, setValueOfExports] = useState(0);
    const [valueOfImports, setValueOfImports] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name 
    const calcName = 'Net Exports Calculator';
    const vname1 = 'Value of Exports';
    const vname2 = 'Value of Imports';
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
            valueOfImports
        );
        setSolution(calc.solve());
    }
    return (
        <div className="calculator">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/gdp'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={valueOfExports}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={valueOfImports}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default NetExports;