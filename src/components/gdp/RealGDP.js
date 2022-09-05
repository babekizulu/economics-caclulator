//libraries
import {React, useState} from "react";
import {RealGDPFormula} from '../../libs/Formulae';
import {currency} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import Keyboard from "../Keyboard";
import CalcBtn from '../CalcBtn';
import ClearBtn from "../ClearBtn";
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const RealGDP = ({
    unitOfMeasurement,
    toggleKeyboard,
    keyboardVisibility
}) => {
    const [nominalGDP, setNominalGDP] = useState('');
    const [gdpDeflator, setGDPDeflator] = useState('');
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name 
    const calcName = 'Real GDP Calculator';
    const vname1 = `Nominal GDP (${currency.rands})`;
    const vname2 = 'GDP Deflator';
    const solName = 'Real GDP';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setNominalGDP(value);
        }
        else if (variableName === vname2) {
            setGDPDeflator(value);
        }
    }
    const calculateHandler = () => {
        const calc = new RealGDPFormula(
            nominalGDP,
            gdpDeflator,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    };

    const onClearHandler = () => {
        setNominalGDP('');
        setGDPDeflator('');
        setSolution(0);
    };

    const onKeyType = (targetInputField, keyNum) => {
        if (targetInputField === vname1) {
            setNominalGDP(prevNominalGDP => prevNominalGDP += keyNum);
        }
        else if (targetInputField === vname2) {
            setGDPDeflator(prevGDPDeflator => prevGDPDeflator += keyNum);
        };
    };

    return (
        <div className="calc-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/gdp'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={nominalGDP}
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
            inputState={gdpDeflator}
            />
            <Keyboard
            toggleKeyboard={toggleKeyboard} 
            keyboardVisibility={keyboardVisibility}
            targetInputField={vname2}
            onKeyType={onKeyType}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default RealGDP;