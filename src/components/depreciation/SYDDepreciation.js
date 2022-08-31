//libraries
import {React, useState} from "react";
import {SumOfYearsDigitsDepreciation} from '../../libs/Formulae';
import {currency, timePeriods} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import Keyboard from "../Keyboard";
import CalcBtn from '../CalcBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const SYDDepreciation = ({
    unitOfMeasurement, 
    focusHandler,
    toggleKeyboard,
    keyboardVisibility,
    activeInput
}) => {
    const [remainingLife, setRemainingLife] = useState(0);
    const [sumOfYearsDigits, setSumOfYearsDigits] = useState(0);
    const [cost, setCost] = useState(0);
    const [salvageValue, setSalvageValue] = useState(0);
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
    return (
        <div className="calculator">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/depreciation'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={remainingLife}
            focusHandler={focusHandler}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={sumOfYearsDigits}
            focusHandler={focusHandler}
            />
            <InputDisplay
            variableName={vname3}
            onChangeHandler={onChangeHandler}
            inputState={cost}
            focusHandler={focusHandler}
            />
            <InputDisplay
            variableName={vname4}
            onChangeHandler={onChangeHandler}
            inputState={salvageValue}
            focusHandler={focusHandler}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             activeInput={activeInput}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solname}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default SYDDepreciation;