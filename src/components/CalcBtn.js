import React from "react";

const CalcBtn = ({calculateHandler}) => {
    return (
        <div className="solve-btn-container">
            <button className="solve-btn" onClick={() => calculateHandler()}>
                =
            </button>
        </div>
    );
};

export default CalcBtn;