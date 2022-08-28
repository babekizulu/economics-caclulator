/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: Main App file for Econmics Calculator
* @TODO: Add clear button to all calculators
* @Date: 2022/08/28
*/
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
import InterestRate from './interest/InterestRate';
import CompoundInterestRate from './interest/CompoundInterestRate';
//ratio calcs 
import CurrentAccGDPRatio from './ratios/CurrentAccGDPRatio';
import GovDebtGDPRatio from './ratios/GovDebtGDPRatio';


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
            <Route path='/depreciation/double-declining-balance'>
                <DDBDepreciation/>
            </Route>
            <Route path='/depreciation/straight-line'>
                <SLDepreciation/>
            </Route>
            <Route path='/depreciation/sum-of-the-years'>
                <SYDDepreciation/>
            </Route>
            <Route path='/depreciation/units-of-production'>
                <UPDepreciation/>
            </Route>
            <Route path='/gdp/expenditure-approach'>
                <GDPExpApproach/>
            </Route>
            <Route path='/gdp/income-approach'>
                <GDPIncomeApproach/>
            </Route>
            <Route path='/gdp/deflator'>
                <GDPDeflator/>
            </Route>
            <Route path='/gdp/growth-rate'>
                <GDPGrowthRate/>
            </Route>
            <Route path='/gdp/net-exports'>
                <NetExports/>
            </Route>
            <Route path='/gdp/real-gdp'>
                <RealGDP/>
            </Route>
            <Route path='/gdp/growth-rate/real-annual'>
                <RealGDPAGRate/>  
            </Route>
            <Route path='/gdp/growth-rate/real-quarterly'>
                <RealGDPQGRate/>
            </Route>
            <Route path='/interest/interest-rate'>
                <InterestRate/>
            </Route>
            <Route path='/interest/compound-interest-rate'>
                <CompoundInterestRate/>
            </Route>
            <Route path='/ratios/current-account-to-gdp'>
                <CurrentAccGDPRatio/>
            </Route>
            <Route path='/ratios/government-debt-to-gdp'>
                <GovDebtGDPRatio/>
            </Route>
        </div>
    );
};

export default App;