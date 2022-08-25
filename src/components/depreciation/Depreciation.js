import React from "react";
//components
import DDBDepreciation from './DDBDepreciation';
import SLDepreciation from './SLDepreciation';
import SYDDepreciation from './SYDDepreciation';
import UPDepreciation from './UPDepreciation';
import Link from '../Link';
import Route from '../Route';

const Depreciation = () => {
    return (
        <div className='depreciation-calculator-container'>
            <Link 
            href='/depreciation/double-declining-balance'
            className='calculator'
            >
                Double Declining Balance Depreciation Calculator
            </Link>
            <Link 
            href='/depreciation/straight-line'
            className='calculator'
            >
                Straight Line Depreciation Calculator
            </Link>
            <Link 
            href='/depreciation/sum-of-the-years'
            className='calculator'
            >
                Sum of the Years Depreciation Calculator
            </Link>
            <Link 
            href='/depreciation/units-of-production'
            className='calculator'
            >
                Units of Production Depreciation Calculator
            </Link>
            <Route path='/depreciation/double-declining-balance'>
                <DDBDepreciation/>
            </Route>
            <Route path='/depreciation/straight-line'>
                <SLDepreciation/>
            </Route>
            <Route path='/depreciation/sum-of-the-years'>
                <SYDDepreciation/>
            </Route>
            <Route path='/depreciation/units-of-production'>
                <UPDepreciation/>
            </Route>
        </div>
    );
};

export default Depreciation;