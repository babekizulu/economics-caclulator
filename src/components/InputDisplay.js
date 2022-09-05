/*
* @Author: Lwandle Babekizulu Dlamini
*/
//libraries
import {React} from "react";

const InputDisplay = ({variableName, onChangeHandler, inputState}) => { 
   return (
    <div className="input-display-container">
        <label className="input-label">
            <h3>
                {variableName}
            </h3>
        </label>
        <input
        type="number" 
        className="calc-input"
        onChange={(e) => onChangeHandler(variableName, e.target.value)}
        value={inputState}
        />
    </div>
   );
};

export default InputDisplay;