import React from "react";
//components
import Link from '../Link';
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';

const Ratios = () => {
    return (
        <div className="calc-set">
            <CalcName calculatorName='Ratio Calculator Set'/>
            <BackBtn prevDir='/'/>
            <div className="calc-set-grid">
                <Link 
                href='/ratios/current-account-to-gdp'
                className='cagdp-ratio-icon menu-icon'
                >
                    Current Account to GDP Ratio Calculator
                </Link>
                <Link 
                href='/ratios/government-debt-to-gdp'
                className='gdgdp-ratio-icon menu-icon'
                >
                    Government Debt to GDP Ratio Calculator
                </Link>
            </div>
        </div>
    );
};

export default Ratios;