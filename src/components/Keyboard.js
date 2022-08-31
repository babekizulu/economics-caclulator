import React from 'react';
//components
import ToggleBtn from './ToggleBtn';

const Keyboard = ({keyboardVisibility, toggleKeyboard, activeInput}) => {
    const keyNumsArr = [1, 2, 3, 4, 5, 6, 7, 9, 0];

    const keyboardTypingHandler = (kn) => {
        activeInput.innerText += kn;
    }

    const renderedKeyNums = keyNumsArr.map(kn => {
        return (
            <div 
            key={kn}
            className='key-num-container' 
            onClick={() => keyboardTypingHandler(kn)}
            >
                <h3>
                    {kn}
                </h3>
            </div>
        );
    });
    return (
        <div className='keyboard-grid'>
            <ToggleBtn componentName='Keyboard' toggleFunc={toggleKeyboard}/>
            {renderedKeyNums}
        </div>
    );
};

export default Keyboard;