import React from 'react';

const ToggleBtn = ({componentName, toggleFunc}) => {
    return (
        <div className='toggle-btn-container'>
            <button className='toggle-btn' onClick={() => toggleFunc()}>
                <header>
                    <h3>Hide/Show {componentName}</h3>
                </header>
            </button>
        </div>
    );
};

export default ToggleBtn;