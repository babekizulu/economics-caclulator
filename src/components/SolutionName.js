import React from 'react';

const SolutionName = ({solutionName}) => {
    return (
        <div className='solution-name-container'>
            <header className="solution-name">
                <h3>
                    {solutionName}
                </h3>
            </header>
        </div>
    )
}

export default SolutionName;