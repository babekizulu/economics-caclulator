//libraries
import {React, useState} from "react";
import {GDPExpApproachFormula} from '../../libs/Formulae';
//components
import CalcName from '../CalcName';
import BackBtn from "../BackBtn";
import InputDisplay from "../InputDisplay";
import CalcBtn from "../CalcBtn";
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";

const GDPExpApproach = ({unitOfMeasurement}) => {
    const [consumption, setConsumption] = useState(0);
    const [investment, setInvestment] = useState(0);
    const [governmentExpenditure, setGovernmentExpenditure] = useState(0);
    const [netExports, setNetExports] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names, solution name 
    const calcName = 'GDP Expenditure Approach Calculator';
    const vname1 = 'Consumption';
    const vname2 = 'Investment';
    const vname3 = 'Government Expenditure';
    const vname4 = 'Net Exports';
    const solName = 'GDP';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setConsumption(value);
        }
        else if (variableName === vname2) {
            setInvestment(value);
        }
        else if (variableName === vname3) {
            setGovernmentExpenditure(value);
        }
        else if (variableName === vname4) {
            setNetExports(value);
        }
    }

    const calculateHandler = () => {
        const calc = new GDPExpApproachFormula(
            consumption,
            investment,
            governmentExpenditure,
            netExports,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    }

    return (
        <div className="calculator">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/gdp'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={consumption}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={investment}
            />
            <InputDisplay
            variableName={vname3}
            onChangeHandler={onChangeHandler}
            inputState={governmentExpenditure}
            />
            <InputDisplay
            variableName={vname4}
            onChangeHandler={onChangeHandler}
            inputState={netExports}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default GDPExpApproach;