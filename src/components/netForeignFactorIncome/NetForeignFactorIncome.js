//libraries
import {React, useState} from "react";
import {NetForeignFactorIncomeFormula} from '../../libs/Formulae';
import {currency} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import CalcBtn from "../CalcBtn";
import ClearBtn from "../ClearBtn";
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";

const NetForeignFactorIncome = ({
    unitOfMeasurement
}) => {
    const [gnp, setGNP] = useState('');
    const [gdp, setGDP] = useState('');
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'Net Foreign Factor Income';
    const vname1 = `GNP (${currency.rands})`;
    const vname2 = `GDP (${currency.rands})`;
    const solName = 'Net Foreign Factor Income';
    
    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setGNP(value);
        }
        else if (variableName === vname2) {
            setGDP(value);
        };
    };

    const calculateHandler = () => {
        const calc = new NetForeignFactorIncomeFormula(
            gnp,
            gdp,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    };

    const onClearHandler = () => {
        setGNP('');
        setGDP('');
        setSolution(0);
    };

    return (
        <div className="calc-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={gnp}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={gdp}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default NetForeignFactorIncome;