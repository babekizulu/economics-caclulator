/*
* @Author: Lwandle Babekizulu Dlamini
*/
//libraries
import {React} from "react";

const InputDisplay = ({variableName, onChangeHandler, inputState, focusHandler}) => {
    
   return (
    <div className="input-display-container">
        <label htmlFor="">{variableName}</label>
        <input
        type="number" 
        className="calculator-input"
        onChange={(e) => onChangeHandler(variableName, e.target.value)}
        onFocus={() => focusHandler()}
        value={inputState}
        />
    </div>
   );
};

export default InputDisplay;