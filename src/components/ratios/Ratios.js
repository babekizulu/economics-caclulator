import React from "react";
//components
import Link from '../Link';
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';

const Ratios = () => {
    return (
        <div className="ratio-calculators-container">
            <CalcName calculatorName='Ratio Calculator Set'/>
            <BackBtn prevDir='/'/>
            <Link 
            href='/ratios/current-account-to-gdp'
            className='cagdp-ratio-calculator icon'
            >
                Current Account to GDP Ratio Calculator
            </Link>
            <Link 
            href='/ratios/government-debt-to-gdp'
            className='gdgdp-ratio-calculator icon'
            >
                Government Debt to GDP Ratio Calculator
            </Link>
        </div>
    );
};

export default Ratios;