/*
* @Author: Lwandle Babekizulu Dlamini
*/
import {React} from "react";

const InputDisplay = ({variableName, onChangeHandler, inputState}) => {
   return (
    <div className="input-display-container">
        <label htmlFor="">{variableName}</label>
        <input
        type="number" 
        className="calculator-input"
        onChange={(e) => onChangeHandler(variableName, e.target.value)}
        value={inputState}
        />
    </div>
   );
};

export default InputDisplay;