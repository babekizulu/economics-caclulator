import React from "react";

/* Calculate Button
* @Desc: The button that executes the calculation functionality
* @Props: calculateHandler 
* - calculateHandler: The appropriate operation to be performed, which 
    is passed down from the Parent Calculator Component and is based 
    on the appropriate formula for that particular economic calculation
*/
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