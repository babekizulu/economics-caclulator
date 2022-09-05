import React from "react";
//components
import Link from '../Link';
import CalcName from '../CalcName';
import BackBtn from "../BackBtn";

const Depreciation = () => {
    return (
        <div className='calc-set'>
            <CalcName calculatorName='Depreciation Calculator Set'/>
            <BackBtn prevDir='/'/>
            <div className="calc-set-grid">
                <Link 
                href='/depreciation/double-declining-balance'
                className='double-declining-balance-icon menu-icon'
                >
                    Double Declining Balance Depreciation Calculator
                </Link>
                <Link 
                href='/depreciation/straight-line'
                className='straight-line-icon menu-icon'
                >
                    Straight Line Depreciation Calculator
                </Link>
                <Link 
                href='/depreciation/sum-of-the-years'
                className='syd-icon menu-icon'
                >
                    Sum of the Years Depreciation Calculator
                </Link>
                <Link 
                href='/depreciation/units-of-production'
                className='units-of-production-icon menu-icon'
                >
                    Units of Production Depreciation Calculator
                </Link>
            </div>
        </div>
    );
};

export default Depreciation;