//libraries
import {React, useState} from "react";
import {InflationRateFormula} from '../../libs/Formulae';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import CalcBtn from '../CalcBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const InflationRate = () => {
    const [pastConsumerPriceIndex, setPastConsumerPriceIndex] = useState(0);
    const [currentConsumerPriceIndex, setCurrentConsumerPriceIndex] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'Inflation Rate Calculator';
    const vname1 = 'Past Consumer Price Index';
    const vname2 = 'Current Consumer Price Index';
    const solName = 'Inflation Rate';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setPastConsumerPriceIndex(value);
        }
        else if (variableName === vname2) {
            setCurrentConsumerPriceIndex(value);
        };
    }
    const calculateHandler = () => {
        const calc = new InflationRateFormula(
            pastConsumerPriceIndex,
            currentConsumerPriceIndex
        );
        setSolution(calc.solve());
    }
    return (
        <div className="inflation-rate-calculator-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={pastConsumerPriceIndex}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={currentConsumerPriceIndex}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default InflationRate;