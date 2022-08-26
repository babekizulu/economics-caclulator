import React from "react";

const SolutionDisplay = ({solution}) => {
    return (
        <div className="solution-container">
            <h3>
                {solution}
            </h3>
        </div>
    )
}

export default SolutionDisplay;