//libraries
import React from "react";
//components
import CalcName from '../../CalcName'
import BackBtn from '../../BackBtn';
import Link from '../../Link';

const GDPGrowthRate = () => {
    return (
        <div className="gdp-growth-rate-calculators-container">
            <CalcName calculatorName='GDP Growth Rate Calculator Set'/>
            <BackBtn prevDir='/gdp'/>
            <Link 
            href='/gdp/growth-rate/real-annual'
            className='qg-rate-calculator icon'
            >
                Real GDP Annual Growth Rate Calculator
            </Link>
            <Link
            href='/gdp/growth-rate/real-quarterly'
            className='ag-rate-calculator icon'
            >
                Real GDP Quarterly Growth Rate Calculator
            </Link>
        </div>
    );
};

export default GDPGrowthRate;