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
import ClearBtn from '../ClearBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const SYDDepreciation = ({
    unitOfMeasurement,
    toggleKeyboard,
    keyboardVisibility
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

    const onKeyType = (targetInputField, keyNum) => {
        if (targetInputField === vname1) {
            setRemainingLife(prevRemainingLife => prevRemainingLife += keyNum);
        }
        else if (targetInputField === vname2) {
            setSumOfYearsDigits(prevSumOfYearsDigits => prevSumOfYearsDigits += keyNum);
        }
        else if (targetInputField === vname3) {
            setCost(prevCost => prevCost += keyNum);
        }
        else if (targetInputField === vname4) {
            setSalvageValue(prevSalvageValue => prevSalvageValue += keyNum);
        };
    };

    return (
        <div className="calc-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/depreciation'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={remainingLife}
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
            inputState={sumOfYearsDigits}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             targetInputField={vname2}
             onKeyType={onKeyType}
            />
            <InputDisplay
            variableName={vname3}
            onChangeHandler={onChangeHandler}
            inputState={cost}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             targetInputField={vname3}
             onKeyType={onKeyType}
            />
            <InputDisplay
            variableName={vname4}
            onChangeHandler={onChangeHandler}
            inputState={salvageValue}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             targetInputField={vname4}
             onKeyType={onKeyType}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solname}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default SYDDepreciation;