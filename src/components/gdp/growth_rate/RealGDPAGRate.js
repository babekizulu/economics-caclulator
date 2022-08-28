//libraries
import {React, useState} from "react";
import {RealGDPAnnualGrowthRateFormula} from '../../../libs/Formulae';
//component
import CalcName from "../../CalcName";
import BackBtn from "../../BackBtn";
import InputDisplay from "../../InputDisplay";
import CalcBtn from '../../CalcBtn';
import SolutionName from '../../SolutionName';
import SolutionDisplay from '../../SolutionDisplay';

const RealGDPAGRate = ({unitOfMeasurement}) => {
    const [gdpPreviousYear, setGDPPreviousYear] = useState(0);
    const [gdpCurrentYear, setGDPCurrentYear] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name 
    const calcName = 'Real GDP Annual Growth Rate Calculator';
    const vname1 = `Prior Year's GDP`;
    const vname2 = `Recent/Current Year's GDP`;
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

    return (
        <div className="calculator">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/gdp/growth-rate'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={gdpPreviousYear}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={gdpCurrentYear}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default RealGDPAGRate;