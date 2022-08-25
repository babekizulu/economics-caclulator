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
import NetForeignFactorIncome from "./netForeignFactorIncome/NetForeignFactorIncome";


const App = () => {
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
            <Route path='/net-foreign-factor-income'>
                <NetForeignFactorIncome/>
            </Route>
        </div>
    );
};

export default App;