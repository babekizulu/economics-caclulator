import React from "react";

const SolutionDisplay = ({solution}) => {
    return (
        <div className="solution-display-container">
           <header className="solution-display">
                <h1>
                    {solution === Infinity || solution === -Infinity ? `I can't calculate this...Please make sure your operation is valid` : solution}
                </h1>
           </header>
        </div>
    );
};

export default SolutionDisplay;