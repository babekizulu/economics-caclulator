import React from 'react';
//components
import ToggleBtn from './ToggleBtn';

const Keyboard = ({
    keyboardVisibility, 
    toggleKeyboard, 
    onKeyType,
    targetInputField
}) => {
    const keyNumsArr = [1, 2, 3, 4, 5, 6, 7, 9, 0];

    const renderedKeyNums = keyNumsArr.map(kn => {
        return (
            <button 
            key={kn}
            className='keyboard-btn'
            onClick={() => onKeyType(targetInputField, kn)}
            >
                {kn}
            </button>
        );
    });
    return (
        <div className="keyboard-container">
            <ToggleBtn componentName='Keyboard' toggleFunc={toggleKeyboard}/>
            <div className='keyboard-grid'>
                {keyboardVisibility ? renderedKeyNums : ''}
            </div>
        </div>
    );
};

export default Keyboard;