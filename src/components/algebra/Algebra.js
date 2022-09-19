//libraries
import React from "react";
//components
import Link from "../Link";
import CalcName from "../CalcName";
import BackBtn from "../BackBtn";

const Algebra = () => {
    return (
        <div className='calc-set'>
            <CalcName calculatorName='Algebra Calculators'/>
            <BackBtn prevDir='/'/>
            <div className='calc-set-grid'>
                <Link 
                href='/mathematics/algebra/exponent-rules'
                className='exponent-calcs-icon menu-icon'
                >
                    Exponent Calculators
                </Link>
            </div>
        </div>
    );
};

export default Algebra;