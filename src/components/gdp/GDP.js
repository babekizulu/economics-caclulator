//libraries
import React from "react";
//components
import Link from "../Link";
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';


const GDP = () => {
    const calcName = 'Gross Domestic Product Calculator Set';
    return (
        <div className="gdp-calculator-container">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/'/>
            <Link 
            href='/gdp/expenditure-approach'
            className='expenditure-approach-calculator icon'
            >
                GDP Expenditure Approach Calculator
            </Link>
            <Link 
            href='/gdp/income-approach'
            className='income-approach-calculator icon'
            >
                GDP Income Approach Calculator
            </Link>
            <Link 
            href='/gdp/deflator'
            className='deflator-calculator icon'
            >
                GDP Deflator Calculator
            </Link>
            <Link 
            href='/gdp/growth-rate'
            className='growth-rate-calculator icon'
            >
                GDP Growth Rate Calculator
            </Link>
            <Link 
            href='/gdp/net-exports'
            className='net-exports-calculator icon'
            >
                Net Exports Calculator
            </Link>
            <Link 
            href='/gdp/real-gdp'
            className='rgdp-calculator icon'
            >
                Real GDP Calculator
            </Link>
        </div>
    );
};

export default GDP;