//libraries
import {React, useState} from "react";
import {CurrentAccountFormula} from '../../libs/Formulae'
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from "../InputDisplay";
import CalcBtn from "../CalcBtn";
import SolutionName from '../SolutionName';
import SolutionDisplay from "../SolutionDisplay";


const CurrentAcc = ({unitOfMeasurement}) => {
    const [expGoodsServices, setExpGoodsServices] = useState(0);
    const [impGoodsServices, setImpGoodsServices] = useState(0);
    const [netEarningsAbroad, setNetEarningsAbroad] = useState(0);
    const [netTransferPayments, setNetTransferPayments] = useState(0);
    const [solution, setSolution] = useState(0);
    //calc variable names
    const calcName = 'Current Account Calculator'
    const vname1 = 'Exports of Goods & Services';
    const vname2 = 'Imports of Goods & Services';
    const vname3 = 'Net Earnings Abroad';
    const vname4 = 'Net Transfer Payments';
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
            />
            <InputDisplay 
            variableName={vname2} 
            onChangeHandler={onChangeHandler} 
            inputState={impGoodsServices}
            />
            <InputDisplay 
            variableName={vname3} 
            onChangeHandler={onChangeHandler} 
            inputState={netEarningsAbroad}
            />
            <InputDisplay 
            variableName={vname4} 
            onChangeHandler={onChangeHandler} 
            inputState={netTransferPayments}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solname}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default CurrentAcc;