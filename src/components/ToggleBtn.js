import React from 'react';

const ToggleBtn = ({componentName, toggleFunc}) => {
    return (
        <div className='toggle-btn-container'>
            <button className='toggle-btn' onClick={() => toggleFunc()}>
                Toggle {componentName}
            </button>
        </div>
    );
};

export default ToggleBtn;