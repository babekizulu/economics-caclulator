//libraries
import React from "react";
//components
import CalcName from '../../CalcName'
import BackBtn from '../../BackBtn';
import Link from '../../Link';

const GDPGrowthRate = () => {
    return (
        <div className="calc-set">
            <CalcName calculatorName='GDP Growth Rate Calculator Set'/>
            <BackBtn prevDir='/gdp'/>
            <div className="calc-set-grid">
                <Link 
                href='/gdp/growth-rate/real-annual'
                className='qg-rate-icon menu-icon'
                >
                    Real GDP Annual Growth Rate Calculator
                </Link>
                <Link
                href='/gdp/growth-rate/real-quarterly'
                className='ag-rate-icon menu-icon'
                >
                    Real GDP Quarterly Growth Rate Calculator
                </Link>
            </div>
        </div>
    );
};

export default GDPGrowthRate;