//libraries
import React from 'react';
//components
import CalcName from '../../CalcName';
import BackBtn from '../../BackBtn';
import Link from '../../Link';

const ExponentRules = () => {
    return (
        <div className='calc-set'>
            <CalcName calculatorName='Exponent Calculators'/>
            <BackBtn prevDir='/mathematics/algebra'/>
            <div className="calc-set-grid">
                <Link 
                href='/mathematics/algebra/exponent-rules/product-rule'
                className='product-rule-calc-icon menu-icon'
                >
                    Product Rule Calculator
                </Link>
                <Link
                href='/mathematics/algebra/exponent-rules/quotient-rule'
                className='quotient-rule-calc-icon menu-icon'
                >
                    Quotient Rule Calculator
                </Link>
                <Link
                href='/mathematics/algebra/exponent-rules/power-rule'
                className='power-rule-calc-icon menu-icon'
                >
                    Power Rule Calculator
                </Link>
                <Link
                href='/mathematics/algebra/exponent-rules/negative-exponents'
                className='negative-exponents-calc-icon menu-icon'
                >
                    Negative Exponents Calculator
                </Link>
                <Link
                href='/mathematics/algebra/exponent-rules/fractional-exponents'
                className='fractional-exponents-calc-icon menu-icon'
                >
                    Fractional Exponents Calculator
                </Link>
                <Link
                href='/mathematics/algebra/exponent-rules/dist-exp'
                className='power-rule-calc-icon menu-icon'
                >
                    Exponent Distribution Calculator
                </Link>
            </div>
        </div>
    );
};

export default ExponentRules;