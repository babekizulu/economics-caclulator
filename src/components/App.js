/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: Main App file for Econmics Calculator
* @TODO: 
    - Add more currency symbols to "currency" array
* @Date: 2022/08/28
*/
//libraries
import {React, useState} from "react";
import {symbols, currency} from '../libs/UnitsOfMeasurement';
//components
import Header from './Header';
import Route from './Route';
import Explorer from "./Explorer";
//calculator components
import GDP from './gdp/GDP';
import InflationRate from './inflationrate/InflationRate';
import Interest from "./interest/Interest";
import Depreciation from './depreciation/Depreciation';
import BalanceOfTrade from './balanceoftrade/BalanceOfTrade';
import Ratios from './ratios/Ratios';
import UnemploymentRate from './unemploymentrate/UnemploymentRate';
import CurrentAcc from "./currentacc/CurrentAcc";
import NetForeignFactorIncome from "./netForeignFactorIncome/NetForeignFactorIncome";
//depreciation calcs
import DDBDepreciation from './depreciation/DDBDepreciation';
import SLDepreciation from './depreciation/SLDepreciation';
import SYDDepreciation from './depreciation/SYDDepreciation';
import UPDepreciation from './depreciation/UPDepreciation';
//gdp calcs
import GDPExpApproach from "./gdp/GDPExpApproach";
import GDPIncomeApproach from "./gdp/GDPIncomeApproach";
import GDPDeflator from './gdp/GDPDeflator';
import GDPGrowthRate from './gdp/growth_rate/GDPGrowthRate';
import NetExports from './gdp/NetExports';
import RealGDP from './gdp/RealGDP';
import RealGDPQGRate from './gdp/growth_rate/RealGDPQGRate';
import RealGDPAGRate from "./gdp/growth_rate/RealGDPAGRate";
//interest calcs
import SimpleInterestRate from './interest/SimpleInterestRate';
import CompoundInterestRate from './interest/CompoundInterestRate';
//ratio calcs 
import CurrentAccGDPRatio from './ratios/CurrentAccGDPRatio';
import GovDebtGDPRatio from './ratios/GovDebtGDPRatio';
//styling
import '../scss/App.scss';


const App = () => {
    //state: controls whether keyboard is hidden or shown
    const [keyboardVisibility, setKeyboardVisibility] = useState(false);
    //destructured units of measurements 
    // - These will be passed into each component to be appended 
    //   onto the final answer of a calculation e.g percent will be 
    //   used to represent the answer 100 as 100%
    const {percent} = symbols;
    const {rands} = currency;

    //functionality for showing and hiding keyboard
    // - If the keyboard is shown and the user clicks the show/hide button
    //   then this function will hide the keyboard, and vice-versa
    const toggleKeyboard = () => {
        if (keyboardVisibility === true) {
            setKeyboardVisibility(false);
        }
        else if (keyboardVisibility === false) {
            setKeyboardVisibility(true);
        };
    };

    /*
    * @Desc: App JSX 
    * @Props: unitOfMeasurement, toggleKeyboard, keyboardVisibility
    * - unitOfMeasurement: contains appropriate unit of measurement
    *   to be appended onto the respective answer
    * - toggleKeyboard: A function to show/hide the keyboard, which I passed 
    *   down to each component to be passed down to each of it's custom 
    *   keyboard instances
    * - keyboardVisibility: A piece of state which holds a boolean and determines
    *   whether the keyboard is shown or hidden. Updates every time the
    *   toggleKeyboard Function is executed
    */
    return (
        <div className="app-container">
            <Header/>
            <Route path='/'>
                <Explorer/>
            </Route>
            <Route path='/gdp'>
                <GDP/>
            </Route>
            <Route path='/inflation-rate'>
                <InflationRate 
                unitOfMeasurement={percent}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/interest'>
                <Interest/>
            </Route>
            <Route path='/depreciation'>
                <Depreciation/>
            </Route>
            <Route path='/balance-of-trade'>
                <BalanceOfTrade 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/ratios'>
                <Ratios/>
            </Route>
            <Route path='/unemployment-rate'>
                <UnemploymentRate 
                unitOfMeasurement={percent}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/current-account'>
                <CurrentAcc 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/net-foreign-factor-income'>
                <NetForeignFactorIncome 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/depreciation/double-declining-balance'>
                <DDBDepreciation 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/depreciation/straight-line'>
                <SLDepreciation 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/depreciation/sum-of-the-years'>
                <SYDDepreciation 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/depreciation/units-of-production'>
                <UPDepreciation 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/gdp/expenditure-approach'>
                <GDPExpApproach 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/gdp/income-approach'>
                <GDPIncomeApproach 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/gdp/deflator'>
                <GDPDeflator
                 toggleKeyboard={toggleKeyboard} 
                 keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/gdp/growth-rate'>
                <GDPGrowthRate/>
            </Route>
            <Route path='/gdp/net-exports'>
                <NetExports 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/gdp/real-gdp'>
                <RealGDP 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/gdp/growth-rate/real-annual'>
                <RealGDPAGRate 
                unitOfMeasurement={percent}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />  
            </Route>
            <Route path='/gdp/growth-rate/real-quarterly'>
                <RealGDPQGRate 
                unitOfMeasurement={percent}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/interest/simple-interest-rate'>
                <SimpleInterestRate 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/interest/compound-interest-rate'>
                <CompoundInterestRate 
                unitOfMeasurement={rands}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/ratios/current-account-to-gdp'>
                <CurrentAccGDPRatio 
                unitOfMeasurement={percent}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
            <Route path='/ratios/government-debt-to-gdp'>
                <GovDebtGDPRatio 
                unitOfMeasurement={percent}
                toggleKeyboard={toggleKeyboard} 
                keyboardVisibility={keyboardVisibility}
                />
            </Route>
        </div>
    );
};

export default App;