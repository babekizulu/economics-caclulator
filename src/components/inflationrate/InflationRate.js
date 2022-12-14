//libraries
import {React, useState} from "react";
import {InflationRateFormula} from '../../libs/Formulae';
import {misc} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import CalcBtn from '../CalcBtn';
import ClearBtn from '../ClearBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const InflationRate = ({
    unitOfMeasurement
}) => {
    const [pastConsumerPriceIndex, setPastConsumerPriceIndex] = useState('');
    const [currentConsumerPriceIndex, setCurrentConsumerPriceIndex] = useState('');
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'Inflation Rate Calculator';
    const vname1 = `Past Consumer Price Index (${misc.points})`;
    const vname2 = `Current Consumer Price Index (${misc.points})`;
    const solName = 'Inflation Rate';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setPastConsumerPriceIndex(value);
        }
        else if (variableName === vname2) {
            setCurrentConsumerPriceIndex(value);
        };
    };

    const calculateHandler = () => {
        const calc = new InflationRateFormula(
            pastConsumerPriceIndex,
            currentConsumerPriceIndex,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    };

    const onClearHandler = () => {
        setPastConsumerPriceIndex('');
        setCurrentConsumerPriceIndex('');
        setSolution(0);
    };

    return (
        <div className="calc-container">
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
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default InflationRate;