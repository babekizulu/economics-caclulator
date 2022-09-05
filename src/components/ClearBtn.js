import React from 'react';

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