//libraries
import React from 'react';
//components
import Link from './Link';

const Explorer = () => {
    return (
        <div className='explorer-container'>
            <Link href='/gdp' className='gdp-calculator icon'>
                GDP Calculator
            </Link>
            <Link href='/inflation-rate' className='inflation-rate-calculator icon'>
                Inflation Rate Calculator
            </Link>
            <Link href='/interest' className='interest-calculator icon'>
                Interest Calculator
            </Link>
            <Link href='/depreciation' className='depreciation-calculator icon'>
                Depreciation Calculator
            </Link>
            <Link href='/balance-of-trade' className='balance-of-trade-calculator icon'>
                Balance of Trade Calculator
            </Link>
            <Link href='/ratios' className='ratio-calculator icon'>
                Ratio Calculator
            </Link>
            <Link href='/unemployment-rate' className='unemployment-rate-calculator icon'>
                Unemployment Rate Calculator
            </Link>
            <Link href='/current-account' className='current-account-calculator icon'>
                Current Account Calculator
            </Link>
            <Link 
            href='/net-foreign-factor-income'
            className='nffi-calculator icon'
            >
                Net Foreign Factor Income Calculator
            </Link>
        </div>
    );
};

export default Explorer;