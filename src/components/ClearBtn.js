import React from 'react';

/* All Clear Button
* @Desc: Resets all input values to null ('') & solution to 0
* @Props: onClearHandler 
* - onClearHandler: Takes in a function which determines which values to
*   clear on each calculator
*/
const ClearBtn = ({onClearHandler}) => {
    return (
        <div className='clear-btn-container'>
            <button className='clear-btn' onClick={() => onClearHandler()}>
                AC
            </button>
        </div>
    );
}

export default ClearBtn;