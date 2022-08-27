//libraries
import {React, useState} from "react";
import {SumOfYearsDigitsDepreciation} from '../../libs/Formulae';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import CalcBtn from '../CalcBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const SYDDepreciation = () => {
    const [remainingLife, setRemainingLife] = useState(0);
    const [sumOfYearsDigits, setSumOfYearsDigits] = useState(0);
    const [cost, setCost] = useState(0);
    const [salvageValue, setSalvageValue] = useState(0);
    const [solution, setSolution] = useState(0);

    //calculator name, variable name & solution name 
    const calcName = 'Sum of the Years Digits Depreciation Calculator';
    const vname1 = 'Remaining Life of Asset';
    const vname2 = 'Sum of the Years';
    const vname3 = 'Cost';
    const vname4 = 'Salvage Value';
    const solname = 'Depreciation Expense';

    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setRemainingLife(value);
        }
        else if (variableName === vname2) {
            setSumOfYearsDigits(value);
        }
        else if (variableName === vname3) {
            setCost(value);
        }
        else if (variableName === vname4) {
            setSalvageValue(value);
        }
    }

    const calculateHandler = () => {
        const calc = new SumOfYearsDigitsDepreciation(
            remainingLife,
            sumOfYearsDigits,
            cost,
            salvageValue
        );
        setSolution(calc.solve());
    }
    return (
        <div className="calculator">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/depreciation'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={remainingLife}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={sumOfYearsDigits}
            />
            <InputDisplay
            variableName={vname3}
            onChangeHandler={onChangeHandler}
            inputState={cost}
            />
            <InputDisplay
            variableName={vname4}
            onChangeHandler={onChangeHandler}
            inputState={salvageValue}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solname}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default SYDDepreciation;