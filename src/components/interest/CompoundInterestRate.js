//libraries
import {React, useState} from "react";
import {CompoundInterestRateFormula} from '../../libs/Formulae';
import {symbols, currency, timePeriods} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from "../BackBtn";
import InputDisplay from "../InputDisplay";
import Keyboard from "../Keyboard";
import CalcBtn from "../CalcBtn";
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";

const CompoundInterestRate = ({
    unitOfMeasurement, 
    focusHandler,
    toggleKeyboard,
    keyboardVisibility,
    activeInput
}) => {
    const [principalAmount, setPrincipalAmount] = useState(0);
    const [rateOfInterest, setRateOfInterest] = useState(0);
    const [nTimesCompounded, setNTimesCompounded] = useState(0);
    const [timePeriod, setTimePeriod] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'Compound Interest Rate Calculator';
    const vname1 = `Principal Amount (${currency.rands})`;
    const vname2 = `Rate of Interest (${symbols.percent})`;
    const vname3 = `Number of Times Compounded (${symbols.n})`;
    const vname4 = `Time Period (${timePeriods.years})`;
    const solName = 'Compound Interest';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setPrincipalAmount(value);
        }
        else if (variableName === vname2) {
            setRateOfInterest(value);
        }
        else if (variableName === vname3) {
            setNTimesCompounded(value);
        }
        else if (variableName === vname4) {
            setTimePeriod(value);
        };
    };

    const calculateHandler = () => {
        const calc = new CompoundInterestRateFormula(
            principalAmount,
            rateOfInterest,
            nTimesCompounded,
            timePeriod,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    };
    return (
        <div className="calculator">
            <CalcName calculatorName={calcName} />
            <BackBtn prevDir='/interest' />
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={principalAmount}
            focusHandler={focusHandler}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={rateOfInterest}
            focusHandler={focusHandler}
            />
            <InputDisplay
            variableName={vname3}
            onChangeHandler={onChangeHandler}
            inputState={nTimesCompounded}
            focusHandler={focusHandler}
            />
            <InputDisplay
            variableName={vname4}
            onChangeHandler={onChangeHandler}
            inputState={timePeriod}
            focusHandler={focusHandler}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             activeInput={activeInput}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default CompoundInterestRate;