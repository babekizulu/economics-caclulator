//libraries
import {React, useState} from "react";
import {DoubleDecliningBalanceDepreciationFormula} from '../../libs/Formulae';
import {currency, timePeriods} from '../../libs/UnitsOfMeasurement';
//components
import BackBtn from "../BackBtn";
import CalcName from '../CalcName';
import InputDisplay from "../InputDisplay";
import Keyboard from "../Keyboard";
import CalcBtn from '../CalcBtn';
import ClearBtn from '../ClearBtn';
import SolutionDisplay from '../SolutionDisplay';
import SolutionName from "../SolutionName";

const DDBDepreciation = ({
    unitOfMeasurement,
    toggleKeyboard,
    keyboardVisibility
}) => {
    const [startingBookValue, setStartingBookValue] = useState('');
    const [assetLifespan, setAssetLifespan] = useState('');
    const [solution, setSolution] = useState(0);
    //calc name, variable names & solution name
    const calcName = 'Double Declining Balance Depreciation Calculator'
    const vname1 = `Starting Book Value (${currency.rands})`;
    const vname2 = `Asset Lifespan (${timePeriods.years})`;
    const solname = 'Depreciation Expense';

    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setStartingBookValue(value);
        }
        else if(variableName === vname2) {
            setAssetLifespan(value);
        };
    };

    const calculateHandler = () => {
        const calc = new DoubleDecliningBalanceDepreciationFormula(
            startingBookValue,
            assetLifespan,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    };

    const onClearHandler = () => {
        setStartingBookValue('');
        setAssetLifespan('');
        setSolution(0);
    };

    const onKeyType = (targetInputField, keyNum) => {
        if (targetInputField === vname1) {
            setStartingBookValue(prevStartingBookValue => prevStartingBookValue += keyNum);
        }
        else if (targetInputField === vname2) {
            setAssetLifespan(prevAssetLifespan => prevAssetLifespan += keyNum);
        };
    };

    return (
        <div className="calc-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/depreciation'/>
            <InputDisplay 
            variableName={vname1} 
            onChangeHandler={onChangeHandler} 
            inputState={startingBookValue}
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
            inputState={assetLifespan}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             targetInputField={vname2}
             onKeyType={onKeyType}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solname}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default DDBDepreciation;