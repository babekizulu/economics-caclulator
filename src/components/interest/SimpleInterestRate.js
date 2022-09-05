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
import ClearBtn from '../ClearBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const SimpleInterestRate = ({
    unitOfMeasurement,
    toggleKeyboard,
    keyboardVisibility
}) => {
    const [interestRate, setInterestRate] = useState('');
    const [principalAmount, setPrincipalAmount] = useState('');
    const [timePeriod, setTimePeriod] = useState('');
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

    const onClearHandler = () => {
        setInterestRate('');
        setPrincipalAmount('');
        setTimePeriod('');
        setSolution(0);
    }

    const onKeyType = (targetInputField, keyNum) => {
        if (targetInputField === vname1) {
            setInterestRate(prevInterestRate => prevInterestRate += keyNum);
        }
        else if (targetInputField === vname2) {
            setPrincipalAmount(prevPrincipalAmount => prevPrincipalAmount += keyNum);
        }
        else if (targetInputField === vname3) {
            setTimePeriod(prevTimePeriod => prevTimePeriod += keyNum);
        };
    };

    return (
        <div className='calc-container'>
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/interest'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={interestRate}
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
            inputState={principalAmount}
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
            inputState={timePeriod}
            />
            <Keyboard
            toggleKeyboard={toggleKeyboard} 
            keyboardVisibility={keyboardVisibility}
            targetInputField={vname3}
            onKeyType={onKeyType}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default SimpleInterestRate;