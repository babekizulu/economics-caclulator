//libraries
import React from "react";
//components
import Link from "../Link";
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';


const GDP = () => {
    const calcName = 'Gross Domestic Product Calculator Set';
    return (
        <div className="calc-set">
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/'/>
            <div className="calc-set-grid">
                <Link 
                href='/gdp/expenditure-approach'
                className='expenditure-approach-icon menu-icon'
                >
                    GDP Expenditure Approach Calculator
                </Link>
                <Link 
                href='/gdp/income-approach'
                className='income-approach-icon menu-icon'
                >
                    GDP Income Approach Calculator
                </Link>
                <Link 
                href='/gdp/deflator'
                className='deflator-icon menu-icon'
                >
                    GDP Deflator Calculator
                </Link>
                <Link 
                href='/gdp/growth-rate'
                className='growth-rate-icon menu-icon'
                >
                    GDP Growth Rate Calculator
                </Link>
                <Link 
                href='/gdp/net-exports'
                className='net-exports-icon menu-icon'
                >
                    Net Exports Calculator
                </Link>
                <Link 
                href='/gdp/real-gdp'
                className='rgdp-icon menu-icon'
                >
                    Real GDP Calculator
                </Link>
            </div>
        </div>
    );
};

export default GDP;