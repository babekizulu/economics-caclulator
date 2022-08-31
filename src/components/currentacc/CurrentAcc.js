//libraries
import {React, useState} from "react";
import {CurrentAccountFormula} from '../../libs/Formulae';
import {currency} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import Keyboard from "../Keyboard";
import CalcBtn from "../CalcBtn";
import SolutionName from '../SolutionName';
import SolutionDisplay from "../SolutionDisplay";


const CurrentAcc = ({
    unitOfMeasurement, 
    focusHandler,
    toggleKeyboard,
    keyboardVisibility,
    activeInput
}) => {
    const [expGoodsServices, setExpGoodsServices] = useState(0);
    const [impGoodsServices, setImpGoodsServices] = useState(0);
    const [netEarningsAbroad, setNetEarningsAbroad] = useState(0);
    const [netTransferPayments, setNetTransferPayments] = useState(0);
    const [solution, setSolution] = useState(0);
    //calc variable names
    const calcName = 'Current Account Calculator'
    const vname1 = `Exports of Goods & Services (${currency.rands})`;
    const vname2 = `Imports of Goods & Services (${currency.rands})`;
    const vname3 = `Net Earnings Abroad (${currency.rands})`;
    const vname4 = `Net Transfer Payments (${currency.rands})`;
    const solname = 'Current Account';
    const onChangeHandler = (variableName, value) => {
        if(variableName === vname1) {
            setExpGoodsServices(value);
        }
        else if(variableName === vname2) {
            setImpGoodsServices(value);
        }
        else if(variableName === vname3) {
            setNetEarningsAbroad(value);
        }
        else if(variableName === vname4) {
            setNetTransferPayments(value);
        }
    }

    const calculateHandler = () => {
        const calc = new CurrentAccountFormula(
            expGoodsServices,
            impGoodsServices, 
            netEarningsAbroad, 
            netTransferPayments,
            unitOfMeasurement
            );
        setSolution(calc.solve());
    }

    return (
        <div className="current-acc-calculator-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/'/>
            <InputDisplay 
            variableName={vname1} 
            onChangeHandler={onChangeHandler} 
            inputState={expGoodsServices}
            focusHandler={focusHandler}
            />
            <InputDisplay 
            variableName={vname2} 
            onChangeHandler={onChangeHandler} 
            inputState={impGoodsServices}
            focusHandler={focusHandler}
            />
            <InputDisplay 
            variableName={vname3} 
            onChangeHandler={onChangeHandler} 
            inputState={netEarningsAbroad}
            focusHandler={focusHandler}
            />
            <InputDisplay 
            variableName={vname4} 
            onChangeHandler={onChangeHandler} 
            inputState={netTransferPayments}
            focusHandler={focusHandler}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             activeInput={activeInput}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solname}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default CurrentAcc;