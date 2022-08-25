/*
* @Author: Lwandle Babekizulu Dlamini
* @TODO: Remove this component and make individual calculator inputs 
*        for each indicator component.
*/
import {React, useState} from "react";

const Calculator = ({inputArr, formula}) => {
    const [input, setInput] = useState({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    });
    const inputList = inputArr.map(({inputLabel, inputNum}) => {
        return (
            <div className="input-container">
                <label htmlFor="">{inputLabel}</label>
                <input 
                type="number" 
                className="calculator-input" 
                name={inputNum}
                value={input.inputNum} 
                onChange={e => setInput({
                    ...input,
                    [e.target.name]: e.target.value
                })} 
                />
            </div>
        );
    });

    return (
        <div className="calculator">
            {inputList}
            <button className="calculate-btn">
                =
            </button>
        </div>
    );
};

export default Calculator;