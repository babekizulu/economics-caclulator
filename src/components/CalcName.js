import React from "react";

/* Calculator Name
* @Desc: The name describing what calculator is being used 
* @Props: calculatorName
* - calculatorName: A prop containing the name of the current calculator or 
*   calculator set which is being used     
*/
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