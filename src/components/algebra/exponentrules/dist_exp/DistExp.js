import React from 'react';
//components
import Link from '../../../Link';
import CalcName from '../../../CalcName';
import BackBtn from '../../../BackBtn';

const DistExp = () => {
    return (
        <div className='calc-set'>
            <CalcName calculatorName='Distribute an Exponent'/>
            <BackBtn prevDir='/mathematics/algebra'/>
            <div className="calc-set-grid">
            <Link 
            href='/mathematics/algebra/exponent-rules/dist-exp/dist-exp-product'
            className='dist-exp-product-icon menu-icon'
            >
                Distribute Exponent Over a Product
            </Link>
            <Link
            href='/mathematics/algebra/exponent-rules/dist-exp/dist-exp-quotient'
            className='dist-exp-quotient-icon menu-icon'
            >
                Distribute Exponent Over a Quotient
            </Link>
            </div>
        </div>
    );
};

export default DistExp;