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
import SolutionDisplay from '../SolutionDisplay';
import SolutionName from "../SolutionName";

const DDBDepreciation = ({
    unitOfMeasurement, 
    focusHandler,
    toggleKeyboard,
    keyboardVisibility, 
    activeInput
}) => {
    const [startingBookValue, setStartingBookValue] = useState(0);
    const [assetLifespan, setAssetLifespan] = useState(0);
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
        }
    }

    const calculateHandler = () => {
        const calc = new DoubleDecliningBalanceDepreciationFormula(
            startingBookValue,
            assetLifespan,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    }

    return (
        <div className="ddb-dep-calculator-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/depreciation'/>
            <InputDisplay 
            variableName={vname1} 
            onChangeHandler={onChangeHandler} 
            inputState={startingBookValue}
            focusHandler={focusHandler}
            />
            <InputDisplay 
            variableName={vname2} 
            onChangeHandler={onChangeHandler} 
            inputState={assetLifespan}
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

export default DDBDepreciation;