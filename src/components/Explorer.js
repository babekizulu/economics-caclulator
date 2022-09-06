//libraries
import React from 'react';
//components
import Link from './Link';

/* Explorer Menu
* @Desc: A menu of links to each calculator/calculator set
*/
const Explorer = () => {
    return (
        <div className='explorer-container'>
            <Link href='/gdp' className='gdp-icon menu-icon'>
                GDP Calculator
            </Link>
            <Link href='/inflation-rate' className='inflation-rate-icon menu-icon'>
                Inflation Rate Calculator
            </Link>
            <Link href='/interest' className='interest-icon menu-icon'>
                Interest Calculator
            </Link>
            <Link href='/depreciation' className='depreciation-icon menu-icon'>
                Depreciation Calculator
            </Link>
            <Link href='/balance-of-trade' className='balance-of-trade-icon menu-icon'>
                Balance of Trade Calculator
            </Link>
            <Link href='/ratios' className='ratio-icon menu-icon'>
                Ratio Calculator
            </Link>
            <Link href='/unemployment-rate' className='unemployment-rate-icon menu-icon'>
                Unemployment Rate Calculator
            </Link>
            <Link href='/current-account' className='current-account-icon menu-icon'>
                Current Account Calculator
            </Link>
            <Link 
            href='/net-foreign-factor-income'
            className='nffi-icon menu-icon'
            >
                Net Foreign Factor Income Calculator
            </Link>
        </div>
    );
};

export default Explorer;