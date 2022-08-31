//libraries
import {React, useState} from "react";
import {RealGDPQuaterlyGrowthRateFormula} from '../../../libs/Formulae';
import {currency} from '../../../libs/UnitsOfMeasurement';
//components
import CalcName from '../../CalcName';
import BackBtn from '../../BackBtn';
import InputDisplay from "../../InputDisplay";
import Keyboard from "../../Keyboard";
import CalcBtn from '../../CalcBtn';
import SolutionName from '../../SolutionName';
import SolutionDisplay from "../../SolutionDisplay";

const RealGDPQGRate = ({
    unitOfMeasurement, 
    focusHandler,
    toggleKeyboard,
    keyboardVisibility,
    activeInput
}) => {
    const [gdpQ1, setGDPQ1] = useState(0);
    const [gdpQ2, setGDPQ2] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names & solution name
    const calcName = 'Real GDP Quarterly Growth Rate Calculator';
    const vname1 = `GDP Quarter 1 (${currency.rands})`;
    const vname2 = `GDP Quarter 2 (${currency.rands})`;
    const solName = 'Growth';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setGDPQ1(value);
        }
        else if(variableName === vname2) {
            setGDPQ2(value);
        };
    };

    const calculateHandler = () => {
        const calc = new RealGDPQuaterlyGrowthRateFormula(
            gdpQ1,
            gdpQ2,
            unitOfMeasurement
        );
        setSolution(calc.solve());
    }
    return (
        <div className="calculator">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/gdp/growth-rate'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={gdpQ1}
            focusHandler={focusHandler}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={gdpQ2}
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

export default RealGDPQGRate;