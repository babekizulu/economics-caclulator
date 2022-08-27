//libraries
import {React, useState} from "react";
import {DoubleDecliningBalanceDepreciationFormula} from '../../libs/Formulae';
//components
import BackBtn from "../BackBtn";
import CalcName from '../CalcName';
import InputDisplay from "../InputDisplay";
import CalcBtn from '../CalcBtn';
import SolutionDisplay from '../SolutionDisplay';
import SolutionName from "../SolutionName";

const DDBDepreciation = () => {
    const [startingBookValue, setStartingBookValue] = useState(0);
    const [assetLifespan, setAssetLifespan] = useState(0);
    const [solution, setSolution] = useState(0);
    //calc name, variable names & solution name
    const calcName = 'Double Declining Balance Depreciation Calculator'
    const vname1 = 'Starting Book Value';
    const vname2 = 'Asset Lifespan';
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
            assetLifespan
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
            />
            <InputDisplay 
            variableName={vname2} 
            onChangeHandler={onChangeHandler} 
            inputState={assetLifespan}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solname}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default DDBDepreciation;