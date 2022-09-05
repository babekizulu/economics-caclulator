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
import ClearBtn from "../ClearBtn";
import SolutionName from '../SolutionName';
import SolutionDisplay from "../SolutionDisplay";


const CurrentAcc = ({
    unitOfMeasurement,
    toggleKeyboard,
    keyboardVisibility,
}) => {
    const [expGoodsServices, setExpGoodsServices] = useState('');
    const [impGoodsServices, setImpGoodsServices] = useState('');
    const [netEarningsAbroad, setNetEarningsAbroad] = useState('');
    const [netTransferPayments, setNetTransferPayments] = useState('');
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
        };
    };

    const calculateHandler = () => {
        const calc = new CurrentAccountFormula(
            expGoodsServices,
            impGoodsServices, 
            netEarningsAbroad, 
            netTransferPayments,
            unitOfMeasurement
            );
        setSolution(calc.solve());
    };

    const onClearHandler = () => {
        setExpGoodsServices('');
        setImpGoodsServices('');
        setNetEarningsAbroad('');
        setNetTransferPayments('');
        setSolution(0);
    }

    const onKeyType = (targetInputField, keyNum) => {
        if (targetInputField === vname1) {
            setExpGoodsServices(prevExpGoodsServices => prevExpGoodsServices += keyNum);
        }
        else if (targetInputField === vname2) {
            setImpGoodsServices(prevImpGoodsServices => prevImpGoodsServices += keyNum);
        }
        else if (targetInputField === vname3) {
            setNetEarningsAbroad(prevNetEarningsAbroad => prevNetEarningsAbroad += keyNum);
        }
        else if (targetInputField === vname4) {
            setNetTransferPayments(prevNetTransferPayments => prevNetTransferPayments += keyNum);
        };
    };

    return (
        <div className="calc-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/'/>
            <InputDisplay 
            variableName={vname1} 
            onChangeHandler={onChangeHandler} 
            inputState={expGoodsServices}
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
            inputState={impGoodsServices}
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
            inputState={netEarningsAbroad}
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
            inputState={netTransferPayments}
            />
            <Keyboard
             toggleKeyboard={toggleKeyboard} 
             keyboardVisibility={keyboardVisibility}
             targetInputField={vname4}
             onKeyType={onKeyType}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <ClearBtn onClearHandler={onClearHandler}/>
            <SolutionName solutionName={solname}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default CurrentAcc;