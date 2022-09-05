//libraries
import {React, useState} from 'react';
import {UnitsOfProductionDepreciationFormula} from '../../libs/Formulae';
import {currency, misc} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from '../InputDisplay';
import Keyboard from '../Keyboard';
import CalcBtn from '../CalcBtn';
import ClearBtn from '../ClearBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const UPDepreciation = ({
    unitOfMeasurement, 
    toggleKeyboard,
    keyboardVisibility
}) => {
    const [numOfUnitsProduced, setNumOfUnitsProduced] = useState('');
    const [lifespanUnits, setLifespanUnits] = useState('');
    const [cost, setCost] = useState('');
    const [salvageValue, setSalvageValue] = useState('');
    const [solution, setSolution] = useState(0);

    //calculator name, variable names & solution name
    const calcName = 'Units of Production Depreciation Calculator';
    const vname1 = `Number of Units Produced (${misc.units})`;
    const vname2 = `Lifespan in Units (${misc.units})`;
    const vname3 = `Cost (${currency.rands})`;
    const vname4 = `Salvage Value (${currency.rands})`;
    const solName = `Depreciation Expense`;

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setNumOfUnitsProduced(value);
        }
        else if (variableName === vname2) {
            setLifespanUnits(value);
        }
        else if (variableName === vname3) {
            setCost(value);
        }
        else if (variableName === vname4) {
            setSalvageValue(value);
        }
    }

    const calculateHandler = () => {
        const calc = new UnitsOfProductionDepreciationFormula(
            numOfUnitsProduced,
            lifespanUnits,
            cost,
            salvageValue,
            unitOfMeasurement
        );

        setSolution(calc.solve());
    };

    const onClearHandler = () => {
        setNumOfUnitsProduced('');
        setLifespanUnits('');
        setCost('');
        setSalvageValue('');
        setSolution(0);
    };

    const onKeyType = (targetInputField, keyNum) => {
        if (targetInputField === vname1) {
            setNumOfUnitsProduced(prevNumOfUnitsProduced => prevNumOfUnitsProduced += keyNum);
        }
        else if (targetInputField === vname2) {
            setLifespanUnits(prevLifespanUnits => prevLifespanUnits += keyNum);
        }
        else if (targetInputField === vname3) {
            setCost(prevCost => prevCost += keyNum);
        }
        else if (targetInputField === vname4) {
            setSalvageValue(prevSalvageValue => prevSalvageValue += keyNum);
        };
    };

    return (
        <div className='calc-container'>
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/depreciation'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={numOfUnitsProduced}
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
            inputState={lifespanUnits}
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
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default UPDepreciation;