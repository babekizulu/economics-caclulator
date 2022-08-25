//libraries
import React from "react";
//components
import Calculator from "../Calculator";

const BalanceOfTrade = () => {
    const inputArr = [
        {
            inputLabel: 'Value of Exports',
            inputNum: 1
        },
        {
            inputLabel: 'Value of Imports',
            inputNum: 2
        }
    ]
    return (
        <div className="calculator">
            <Calculator inputArr={inputArr}/>
        </div>
    );
};

export default BalanceOfTrade;