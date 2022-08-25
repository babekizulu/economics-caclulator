import React from "react";
//components
import CurrentAccGDPRatio from './CurrentAccGDPRatio';
import GovDebtGDPRatio from './GovDebtGDPRatio';
import Link from '../Link';
import Route from '../Route';

const Ratios = () => {
    return (
        <div className="ratio-calculators-container">
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
            <Route path='/ratios/current-account-to-gdp'>
                <CurrentAccGDPRatio/>
            </Route>
            <Route path='/ratios/government-debt-to-gdp'>
                <GovDebtGDPRatio/>
            </Route>
        </div>
    );
};

export default Ratios;