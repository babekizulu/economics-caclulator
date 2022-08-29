//libraries
import React from "react";
//component
import Link from '../Link';
import CalcName from "../CalcName";
import BackBtn from "../BackBtn";

const Interest = () => {
    return (
        <div className="interest-calculators-container">
            <CalcName calculatorName='Interest Calculator Set'/>
            <BackBtn prevDir='/'/>
            <Link 
            href='/interest/simple-interest-rate'
            className='simple-interest-rate-calculator icon'
            >
                Simple Interest Rate Calculator
            </Link>
            <Link 
            href='/interest/compound-interest-rate'
            className='compound-interest-rate-calculator icon'
            >
                Compound Interest Rate Calculator
            </Link>
        </div>
    );
};

export default Interest;