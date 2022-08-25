//libraries
import React from "react";
//component
import InterestRate from "./InterestRate";
import CompoundInterestRate from './CompoundInterestRate';
import Link from '../Link';
import Route from '../Route';

const Interest = () => {
    return (
        <div className="interest-calculators-container">
            <Link 
            href='/interest/interest-rate'
            className='interest-rate-calculator icon'
            >
                Interest Rate Calculator
            </Link>
            <Link 
            href='/interest/compound-interest-rate'
            className='compound-interest-rate-calculator icon'
            >
                Compound Interest Rate Calculator
            </Link>
            <Route path='/interest/interest-rate'>
                <InterestRate/>
            </Route>
            <Route path='/interest/compound-interest-rate'>
                <CompoundInterestRate/>
            </Route>
        </div>
    );
};

export default Interest;