//libraries
import {React, useState} from "react";
import {StraightLineDepreciationFormula} from '../../libs/Formulae';
import {currency, timePeriods} from '../../libs/UnitsOfMeasurement';
//components
import BackBtn from "../BackBtn";
import CalcName from '../CalcName';
import InputDisplay from "../InputDisplay";
import CalcBtn from '../CalcBtn';
import ClearBtn from '../ClearBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const SLDepreciation = ({
    unitOfMeasurement
}) => {
    const [cost, setCost] = useState('');
    const [salvageValue, setSalvageValue] = useState('');
    const [assetLifespan, setAssetLifespan] = useState('');
    const [solution, setSolution] = useState(0);

    //calculator name, variable name, solution name
    const calcname = 'Straight Line Depreciation Calculator';
    const vname1 = `Cost (${currency.rands})`;
    const vname2 = `Salvage Value (${currency.rands})`;
    const vname3 = `Asset Lifespan (${timePeriods.years})`;
    const solname = 'Depreciation Expense';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setCost(value);
        }
        else if (variableName === vname2) {
            setSalvageValue(value);
        }
        else if (variableName === vname3) {
            setAssetLifespan(value);
        }
    };

    const calculateHandler = () => {
        const calc = new StraightLineDepreciationFormula(
            cost,
            salvageValue,
            assetLifespan,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    };

    const onClearHandler = () => {
        setCost('');
        setSalvageValue('');
        setAssetLifespan('');
        setSolution(0);
    };
    
    return (
        <div className="calc-container">
            <CalcName calculatorName={calcname}/>
            <BackBtn prevDir='/depreciation'/>
            <InputDisplay 
            variableName={vname1} 
            onChangeHandler={onChangeHandler} 
            inputState={cost}
            />
            <InputDisplay 
            variableName={vname2} 
            onChangeHandler={onChangeHandler} 
            inputState={salvageValue}
            />
            <InputDisplay 
            variableName={vname3} 
            onChangeHandler={onChangeHandler} 
            inputState={assetLifespan}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solname}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default SLDepreciation;