//libraries
import {React, useState} from "react";
import {GDPIncomeApproachFormula} from '../../libs/Formulae';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import CalcBtn from '../CalcBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const GDPIncomeApproach = ({unitOfMeasurement}) => {
    const [totalNationalIncome, setTotalNationalIncome] = useState(0);
    const [salesTaxes, setSalesTaxes] = useState(0);
    const [depreciation, setDepreciation] = useState(0);
    const [netForeignFactorIncome, setNetForeignFactorIncome] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'GDP Income Approach Calculator';
    const vname1 = 'Total National Income';
    const vname2 = 'Sales Taxes';
    const vname3 = 'Depreciation';
    const vname4 = 'Net Foreign Factor Income';
    const solName = 'GDP';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setTotalNationalIncome(value);
        }
        else if (variableName === vname2) {
            setSalesTaxes(value);
        }
        else if (variableName === vname3) {
            setDepreciation(value);
        }
        else if (variableName === vname4) {
            setNetForeignFactorIncome(value);
        }
    }
    
    const calculateHandler = () => {
        const calc = new GDPIncomeApproachFormula(
            totalNationalIncome,
            salesTaxes,
            depreciation,
            netForeignFactorIncome,
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
            inputState={totalNationalIncome}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={salesTaxes}
            />
            <InputDisplay
            variableName={vname3}
            onChangeHandler={onChangeHandler}
            inputState={depreciation}
            />
            <InputDisplay
            variableName={vname4}
            onChangeHandler={onChangeHandler}
            inputState={netForeignFactorIncome}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default GDPIncomeApproach;