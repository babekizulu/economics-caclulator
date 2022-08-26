import React from "react";

const CalcBtn = ({calculateHandler}) => {
    return (
        <div className="calculate-btn-container">
            <button className="calculate-btn" onClick={() => calculateHandler()}>
                =
            </button>
        </div>
    );
};

export default CalcBtn;