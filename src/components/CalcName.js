import React from "react";

const CalcName = ({calculatorName}) => {
    return (
        <div className="calculator-name-container">
            <header className="calculator-name">
                <h1>{calculatorName}</h1>
            </header>
        </div>
    );
};

export default CalcName;