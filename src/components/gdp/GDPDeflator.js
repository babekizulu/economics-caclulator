//libraries
import {React, useState} from 'react';
import {GDPDeflatorFormula} from '../../libs/Formulae';
import {currency} from '../../libs/UnitsOfMeasurement';
//components
import CalcName from '../CalcName';
import BackBtn from '../BackBtn';
import InputDisplay from '../InputDisplay';
import CalcBtn from '../CalcBtn';
import SolutionName from '../SolutionName';
import SolutionDisplay from '../SolutionDisplay';

const GDPDeflator = () => {
    const [nominalGDP, setNominalGDP] = useState(0);
    const [realGDP, setRealGDP] = useState(0);
    const [solution, setSolution] = useState(0);
    //calculator name, variable names, solution name
    const calcName = 'GDP Deflator Calculator';
    const vname1 = `Nominal GDP (${currency.rands})`;
    const vname2 = `Real GDP (${currency.rands})`;
    const solName = 'Deflator';

    const onChangeHandler = (variableName, value) => {
        if (variableName === vname1) {
            setNominalGDP(value);
        }
        else if (variableName === vname2) {
            setRealGDP(value);
        }
    }

    const calculateHandler = () => {
        const calc = new GDPDeflatorFormula(
            nominalGDP,
            realGDP
        );
        setSolution(calc.solve());
    }
    return (
        <div className='calculator'>
            <CalcName calculatorName={calcName}/>
            <BackBtn prevDir='/gdp'/>
            <InputDisplay
            variableName={vname1}
            onChangeHandler={onChangeHandler}
            inputState={nominalGDP}
            />
            <InputDisplay
            variableName={vname2}
            onChangeHandler={onChangeHandler}
            inputState={realGDP}
            />
            <CalcBtn calculateHandler={calculateHandler}/>
            <SolutionName solutionName={solName}/>
            <SolutionDisplay solution={solution}/>
        </div>
    );
};

export default GDPDeflator;