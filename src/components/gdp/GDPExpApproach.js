//libraries
import {React, useState} from "react";
import {GDPExpApproachFormula} from '../../libs/Formulae';
import {currency} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from "../BackBtn";
import InputDisplay from "../InputDisplay";
import Keyboard from "../Keyboard";
import CalcBtn from "../CalcBtn";
import ClearBtn from "../ClearBtn";
import SolutionName from "../SolutionName";
import SolutionDisplay from "../SolutionDisplay";

const GDPExpApproach = ({
    unitOfMeasurement,
    toggleKeyboard,
    keyboardVisibility
}) => {
    const [consumption, setConsumption] = useState('');
    const [investment, setInvestment] = useState('');
    const [governmentExpenditure, setGovernmentExpenditure] = useState('');
    const [netExports, setNetExports] = useState('');
    const [solution, setSolution] = useState(0);
    //calculator name, variable names, solution name 
    const calcName = 'GDP Expenditure Approach Calculator';
    const vname1 = `Consumption (${currency.rands})`;
    const vname2 = `Investment (${currency.rands})`;
    const vname3 = `Government Expenditure (${currency.rands})`;
    const vname4 = `Net Exports (${currency.rands})`;
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

    const onClearHandler = () => {
        setConsumption('');
        setInvestment('');
        setGovernmentExpenditure('');
        setNetExports('');
        setSolution(0);
    }

    const onKeyType = (targetInputField, keyNum) => {
        if (targetInputField === vname1) {
            setConsumption(prevConsumption => prevConsumption += keyNum);
        }
        else if (targetInputField === vname2) {
            setInvestment(prevInvestment => prevInvestment += keyNum);
        }
        else if (targetInputField === vname3) {
            setGovernmentExpenditure(prevGovernmentExpenditure => prevGovernmentExpenditure += keyNum);
        }
        else if (targetInputField === vname4) {
            setNetExports(prevNetExports => prevNetExports += keyNum);
        };
    };

    return (
        <div className="calc-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/gdp'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={consumption}
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
            inputState={investment}
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
            inputState={governmentExpenditure}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             targetInputField={vname3}
             onKeyType={onKeyType}
            />
            <InputDisplay
            variableName={vname4}
            onChangeHandler={onChangeHandler}
            inputState={netExports}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             targetInputField={vname4}
             onKeyType={onKeyType}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default GDPExpApproach;