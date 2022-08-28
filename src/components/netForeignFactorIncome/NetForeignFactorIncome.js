//libraries
import {React, useState} from "react";
import {NetForeignFactorIncomeFormula} from '../../libs/Formulae';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import CalcBtn from "../CalcBtn";
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";

const NetForeignFactorIncome = () => {
    const [gnp, setGNP] = useState(0);
    const [gdp, setGDP] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'Net Foreign Factor Income';
    const vname1 = 'GNP';
    const vname2 = 'GDP';
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
            gdp
        );
        setSolution(calc.solve());
    };

    return (
        <div className="calculator">
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
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default NetForeignFactorIncome;