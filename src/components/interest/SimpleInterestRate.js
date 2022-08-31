//libraries
import {React, useState} from 'react';
import {SimpleInterestRateFormula} from '../../libs/Formulae';
import {symbols, currency, timePeriods} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from '../InputDisplay';
import Keyboard from '../Keyboard';
import CalcBtn from '../CalcBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const SimpleInterestRate = ({
    unitOfMeasurement, 
    focusHandler,
    toggleKeyboard,
    keyboardVisibility,
    activeInput
}) => {
    const [interestRate, setInterestRate] = useState(0);
    const [principalAmount, setPrincipalAmount] = useState(0);
    const [timePeriod, setTimePeriod] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'Simple Interest Rate Calculator';
    const vname1 = `Interest Rate (${symbols.percent})`;
    const vname2 = `Principal Amount (${currency.rands})`;
    const vname3 = `Time Period (${timePeriods.years})`;
    const solName = 'Interest Rate';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setInterestRate(value);
        }
        else if (variableName === vname2) {
            setPrincipalAmount(value);
        }
        else if (variableName === vname3) {
            setTimePeriod(value);
        };
    };

    const calculateHandler = () => {
        const calc = new SimpleInterestRateFormula(
            interestRate,
            principalAmount,
            timePeriod,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    };
    return (
        <div className='calculator'>
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/interest'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={interestRate}
            focusHandler={focusHandler}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={principalAmount}
            focusHandler={focusHandler}
            />
            <InputDisplay
            variableName={vname3}
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

export default SimpleInterestRate;