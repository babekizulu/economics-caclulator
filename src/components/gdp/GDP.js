//libraries
import React from "react";
//components
import GDPExpApproach from "./GDPExpApproach";
import GDPIncomeApproach from "./GDPIncomeApproach";
import GDPDeflator from './GDPDeflator';
import GDPGrowthRate from './GDPGrowthRate';
import NetExports from './NetExports';
import RealGDP from './RealGDP';
import RealGDPQGRate from './RealGDPQGRate';
import RealGDPAGRate from "./RealGDPAGRate";
import Route from "../Route";
import Link from "../Link";


const GDP = () => {
    return (
        <div className="gdp-calculator-container">
            <Link href='/gdp/expenditure-approach'>
                GDP Expenditure Approach Calculator
            </Link>
            <Link href='/gdp/income-approach'>
                GDP Income Approach Calculator
            </Link>
            <Link href='/gdp/deflator'>
                GDP Deflator Calculator
            </Link>
            <Link href='/gdp/growth-rate'>
                GDP Growth Rate Calculator
            </Link>
            <Link href='/gdp/net-exports'>
                Net Exports Calculator
            </Link>
            <Link href='/gdp/real-gdp'>
                Real GDP Calculator
            </Link>
            <Link href='/gdp/real-gdp-quarterly-growth-rate'>
                Real GDP Quarterly Growth Rate Calculator
            </Link>
            <Link href='/gdp/real-gdp-annual-growth-rate'>
                Real GDP Annual Growth Rate Calculator
            </Link>
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
            <Route path='/gdp/real-gdp-quarterly-growth-rate'>
                <RealGDPQGRate/>
            </Route>
            <Route path='/gdp/real-gdp-annual-growth-rate'>
                <RealGDPAGRate/>
            </Route>
        </div>
    );
};

export default GDP;