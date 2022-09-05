//libraries
import {React, useState} from "react";
import {RealGDPAnnualGrowthRateFormula} from '../../../libs/Formulae';
import {currency} from '../../../libs/UnitsOfMeasurement';
//component
import CalcName from "../../CalcName";
import BackBtn from "../../BackBtn";
import InputDisplay from "../../InputDisplay";
import Keyboard from "../../Keyboard";
import CalcBtn from '../../CalcBtn';
import ClearBtn from '../../ClearBtn';
import SolutionName from '../../SolutionName';
import SolutionDisplay from '../../SolutionDisplay';

const RealGDPAGRate = ({
    unitOfMeasurement,
    toggleKeyboard,
    keyboardVisibility
}) => {
    const [gdpPreviousYear, setGDPPreviousYear] = useState('');
    const [gdpCurrentYear, setGDPCurrentYear] = useState('');
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name 
    const calcName = 'Real GDP Annual Growth Rate Calculator';
    const vname1 = `Prior Year's GDP (${currency.rands})`;
    const vname2 = `Recent/Current Year's GDP (${currency.rands})`;
    const solName = 'Growth';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setGDPPreviousYear(value);
        }
        else if (variableName === vname2) {
            setGDPCurrentYear(value);
        };
    };

    const calculateHandler = () => {
        const calc = new RealGDPAnnualGrowthRateFormula(
            gdpPreviousYear,
            gdpCurrentYear,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    };

    const onClearHandler = () => {
        setGDPPreviousYear('');
        setGDPCurrentYear('');
        setSolution(0);
    };

    const onKeyType = (targetInputField, keyNum) => {
        if(targetInputField === vname1) {
            setGDPPreviousYear(prevGDPPreviousYear => prevGDPPreviousYear += keyNum);
        }
        else if (targetInputField === vname2) {
            setGDPCurrentYear(prevGDPCurrentYear => prevGDPCurrentYear += keyNum);
        };
    };

    return (
        <div className="calc-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/gdp/growth-rate'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={gdpPreviousYear}
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
            inputState={gdpCurrentYear}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             targetInputField={vname2}
             onKeyType={onKeyType}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default RealGDPAGRate;