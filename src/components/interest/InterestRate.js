//libraries
import {React, useState} from 'react';
import {InterestRateFormula} from '../../libs/Formulae';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from '../InputDisplay';
import CalcBtn from '../CalcBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const InterestRate = () => {
    const [simpleInterest, setSimpleInterest] = useState(0);
    const [principalAmount, setPrincipalAmount] = useState(0);
    const [timePeriod, setTimePeriod] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'Interest Rate Calculator';
    const vname1 = 'Simple Interest';
    const vname2 = 'Principal Amount';
    const vname3 = 'Time Period';
    const solName = 'Interest Rate';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setSimpleInterest(value);
        }
        else if (variableName === vname2) {
            setPrincipalAmount(value);
        }
        else if (variableName === vname3) {
            setTimePeriod(value);
        };
    };

    const calculateHandler = () => {
        const calc = new InterestRateFormula(
            simpleInterest,
            principalAmount,
            timePeriod
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
            inputState={simpleInterest}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={principalAmount}
            />
            <InputDisplay
            variableName={vname3}
            onChangeHandler={onChangeHandler}
            inputState={timePeriod}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default InterestRate;