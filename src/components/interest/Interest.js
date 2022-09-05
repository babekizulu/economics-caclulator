//libraries
import React from "react";
//component
import Link from '../Link';
import CalcName from "../CalcName";
import BackBtn from "../BackBtn";

const Interest = () => {
    return (
        <div className="calc-set">
            <CalcName calculatorName='Interest Calculator Set'/>
            <BackBtn prevDir='/'/>
            <div className="calc-set-grid">
                <Link 
                href='/interest/simple-interest-rate'
                className='simple-interest-rate-icon menu-icon'
                >
                    Simple Interest Rate Calculator
                </Link>
                <Link 
                href='/interest/compound-interest-rate'
                className='compound-interest-rate-icon menu-icon'
                >
                    Compound Interest Rate Calculator
                </Link>
            </div>
        </div>
    );
};

export default Interest;