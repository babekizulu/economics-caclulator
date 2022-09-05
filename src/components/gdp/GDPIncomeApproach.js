//libraries
import {React, useState} from "react";
import {GDPIncomeApproachFormula} from '../../libs/Formulae';
import {currency} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import Keyboard from "../Keyboard";
import CalcBtn from '../CalcBtn';
import ClearBtn from "../ClearBtn";
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const GDPIncomeApproach = ({
    unitOfMeasurement,
    toggleKeyboard,
    keyboardVisibility
}) => {
    const [totalNationalIncome, setTotalNationalIncome] = useState('');
    const [salesTaxes, setSalesTaxes] = useState('');
    const [depreciation, setDepreciation] = useState('');
    const [netForeignFactorIncome, setNetForeignFactorIncome] = useState('');
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'GDP Income Approach Calculator';
    const vname1 = `Total National Income (${currency.rands})`;
    const vname2 = `Sales Taxes (${currency.rands})`;
    const vname3 = `Depreciation (${currency.rands})`;
    const vname4 = `Net Foreign Factor Income (${currency.rands})`;
    const solName = 'GDP';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setTotalNationalIncome(value);
        }
        else if (variableName === vname2) {
            setSalesTaxes(value);
        }
        else if (variableName === vname3) {
            setDepreciation(value);
        }
        else if (variableName === vname4) {
            setNetForeignFactorIncome(value);
        };
    };
    
    const calculateHandler = () => {
        const calc = new GDPIncomeApproachFormula(
            totalNationalIncome,
            salesTaxes,
            depreciation,
            netForeignFactorIncome,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    };

    const onClearHandler = () => {
        setTotalNationalIncome('');
        setSalesTaxes('');
        setDepreciation('');
        setNetForeignFactorIncome('');
    };

    const onKeyType = (targetInputField, keyNum) => {
        if (targetInputField === vname1) {
            setTotalNationalIncome(prevTotalNationalIncome => prevTotalNationalIncome += keyNum);
        }
        else if (targetInputField === vname2) {
            setSalesTaxes(prevSalesTaxes => prevSalesTaxes += keyNum);
        }
        else if (targetInputField === vname3) {
            setDepreciation(prevDepreciation => prevDepreciation += keyNum);
        }
        else if (targetInputField === vname4) {
            setNetForeignFactorIncome(prevNetForeignFactorIncome => prevNetForeignFactorIncome += keyNum);
        };
    };

    return (
        <div className="calc-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/gdp'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={totalNationalIncome}
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
            inputState={salesTaxes}
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
            inputState={depreciation}
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
            inputState={netForeignFactorIncome}
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

export default GDPIncomeApproach;