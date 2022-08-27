import React from "react";

const SolutionDisplay = ({solution}) => {
    return (
        <div className="solution-container">
            <h1>
                {isNaN(solution) || solution === Infinity || solution === -Infinity ? `I can't calculate this...Please make sure your operation is valid` : solution}
            </h1>
        </div>
    );
};

export default SolutionDisplay;