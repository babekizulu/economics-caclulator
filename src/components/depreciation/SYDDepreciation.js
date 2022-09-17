//libraries
import {React, useState} from "react";
import {SumOfYearsDigitsDepreciation} from '../../libs/Formulae';
import {currency, timePeriods} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import CalcBtn from '../CalcBtn';
import ClearBtn from '../ClearBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const SYDDepreciation = ({
    unitOfMeasurement
}) => {
    const [remainingLife, setRemainingLife] = useState('');
    const [sumOfYearsDigits, setSumOfYearsDigits] = useState('');
    const [cost, setCost] = useState('');
    const [salvageValue, setSalvageValue] = useState('');
    const [solution, setSolution] = useState(0);

    //calculator name, variable name & solution name 
    const calcName = 'Sum of the Years Digits Depreciation Calculator';
    const vname1 = `Remaining Life of Asset (${timePeriods.years})`;
    const vname2 = `Sum of the Years (${timePeriods.years})`;
    const vname3 = `Cost (${currency.rands})`;
    const vname4 = `Salvage Value (${currency.rands})`;
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
            salvageValue,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    }

    const onClearHandler = () => {
        setRemainingLife('');
        setSumOfYearsDigits('');
        setCost('');
        setSalvageValue('');
        setSolution(0);
    }
    
    return (
        <div className="calc-container">
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
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solname}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default SYDDepreciation;