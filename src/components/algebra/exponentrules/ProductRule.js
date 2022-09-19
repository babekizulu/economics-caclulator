//libraries
import React from 'react';
//component
import CalcName from '../../CalcName';
import BackBtn from '../../BackBtn';
import ExpressionDisplay from '../../ExpressionDisplay';

const ProductRule = () => {
    const calcName = 'Product Rule Calculator';
    const rule = 'product';
    return (
        <div className='calc-container'>
            <CalcName calculatorName={calcName}/>
            <BackBtn 
            prevDir='/mathematics/algebra/exponent-rules'
            />
            <ExpressionDisplay rule={rule}/>
        </div>
    );
};

export default ProductRule;