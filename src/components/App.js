//libraries
import React from "react";
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


const App = () => {
    return (
        <div className="app-container">
            <Header/>
            <Explorer/>
            <Route path='/gdp'>
                <GDP/>
            </Route>
            <Route path='/inflation-rate'>
                <InflationRate/>
            </Route>
            <Route path='/interest'>
                <Interest/>
            </Route>
            <Route path='/depreciation'>
                <Depreciation/>
            </Route>
            <Route path='/balance-of-trade'>
                <BalanceOfTrade/>
            </Route>
            <Route path='/ratios'>
                <Ratios/>
            </Route>
            <Route path='/unemployment-rate'>
                <UnemploymentRate/>
            </Route>
            <Route path='/current-account'>
                <CurrentAcc/>
            </Route>
        </div>
    );
};

export default App;