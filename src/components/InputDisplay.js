/*
* @Author: Lwandle Babekizulu Dlamini
*/
import {React} from "react";

const InputDisplay = ({variableName, onChangeHandler, inputState}) => {
   return (
    <div>
        <label htmlFor="">{variableName}</label>
        <input
        type="number" 
        className="calculator-input-container"
        onChange={() => onChangeHandler()}
        value={inputState}
        />
    </div>
   )
};

export default InputDisplay;