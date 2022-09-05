import React from "react";

const CalcName = ({calculatorName}) => {
    return (
        <div className="calc-name-container">
            <header className="calc-name">
                <h1>{calculatorName}</h1>
            </header>
        </div>
    );
};

export default CalcName;