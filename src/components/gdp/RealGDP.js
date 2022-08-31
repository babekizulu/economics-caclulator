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
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const RealGDP = ({
    unitOfMeasurement, 
    focusHandler,
    toggleKeyboard,
    keyboardVisibility,
    activeInput
}) => {
    const [nominalGDP, setNominalGDP] = useState(0);
    const [gdpDeflator, setGDPDeflator] = useState(0);
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
    return (
        <div className="calculator">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/gdp'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={nominalGDP}
            focusHandler={focusHandler}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={gdpDeflator}
            focusHandler={focusHandler}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             activeInput={activeInput}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default RealGDP;