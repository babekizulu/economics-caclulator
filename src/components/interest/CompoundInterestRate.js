//libraries
import {React, useState} from "react";
import {CompoundInterestRateFormula} from '../../libs/Formulae';
//components
import CalcName from '../CalcName';
import BackBtn from "../BackBtn";
import InputDisplay from "../InputDisplay";
import CalcBtn from "../CalcBtn";
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";

const CompoundInterestRate = () => {
    const [principalAmount, setPrincipalAmount] = useState(0);
    const [rateOfInterest, setRateOfInterest] = useState(0);
    const [nTimesCompounded, setNTimesCompounded] = useState(0);
    const [timePeriod, setTimePeriod] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'Compound Interest Rate Calculator';
    const vname1 = 'Principal Amount';
    const vname2 = 'Rate of Interest';
    const vname3 = 'Number of Times Compounded';
    const vname4 = 'Time Period';
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
            timePeriod
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
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={rateOfInterest}
            />
            <InputDisplay
            variableName={vname3}
            onChangeHandler={onChangeHandler}
            inputState={nTimesCompounded}
            />
            <InputDisplay
            variableName={vname4}
            onChangeHandler={onChangeHandler}
            inputState={timePeriod}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default CompoundInterestRate;