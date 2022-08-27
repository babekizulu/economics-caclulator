import React from "react";
//components
import Link from '../Link';
import CalcName from '../CalcName';
import BackBtn from "../BackBtn";

const Depreciation = () => {
    return (
        <div className='depreciation-calculator-container'>
            <CalcName calculatorName='Depreciation Calculator Set'/>
            <BackBtn prevDir='/'/>
            <Link 
            href='/depreciation/double-declining-balance'
            className='double-declining-balance-calculator icon'
            >
                Double Declining Balance Depreciation Calculator
            </Link>
            <Link 
            href='/depreciation/straight-line'
            className='straight-line-calculator icon'
            >
                Straight Line Depreciation Calculator
            </Link>
            <Link 
            href='/depreciation/sum-of-the-years'
            className='syd-calculator icon'
            >
                Sum of the Years Depreciation Calculator
            </Link>
            <Link 
            href='/depreciation/units-of-production'
            className='units-of-production-calculator icon'
            >
                Units of Production Depreciation Calculator
            </Link>
        </div>
    );
};

export default Depreciation;