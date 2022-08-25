/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: Functions to calculate economic indicators based on formulae
* @Date: 2022/08/24
*/

//Nominal Gross Domestic Product using the Expenditure Approach
class GDPExpApproach {
    constructor(
        consumption,
        investment,
        governmentExpenditure,
        netExports
    ) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.consumption = parseFloat(consumption);
        this.investment = parseFloat(investment);
        this.governmentExpenditure = parseFloat(governmentExpenditure);
        this.netExports = parseFloat(netExports);
    };

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: consumption, investment, government expenditure, net exports
        const c = this.consumption;
        const i = this.investment;
        const g = this.governmentExpenditure;
        const nx = this.netExports;
        //gdp expenditure approach formula
        const gdp = c + i + g + nx;
        return gdp;
    };
};


//Nominal Gross Domestic Product using the Income Approach
class GDPIncomeApproach {
    constructor(
    totalNationalIncome,
    salesTaxes,
    depreciation,
    netForeignFactorIncome
    ) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.totalNationalIncome = parseFloat(totalNationalIncome);
        this.salesTaxes = parseFloat(salesTaxes);
        this.depreciation = parseFloat(depreciation);
        this.netForeignFactorIncome = parseFloat(netForeignFactorIncome);
    };

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: total national income, sales taxes, depreciation, net foreign factor income
        const tni = this.totalNationalIncome;
        const t = this.salesTaxes;
        const d = this.depreciation;
        const f = this.netForeignFactorIncome;
        //gdp income approach formula
        const gdp = tni + t + d + f;
        return gdp;
    };
};

//Balance of Trade
class BalanceOfTradeFormula {
    constructor(valueOfExports, valueOfImports) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.valueOfExports = parseFloat(valueOfExports);
        this.valueOfImports = parseFloat(valueOfImports);
    };

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: value of exports, value of imports
        const ve = this.valueOfExports;
        const vi = this.valueOfImports;
        //solve using balance of trade formula
        const bot = ve - vi;
        return bot;
    };
};

//Current Account
class CurrentAccountFormula{
    constructor(
        exportOfGoodsAndServices,
        importOfGoodsAndServices,
        netEarningsFromAbroad,
        netTransferPayments
    ) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.exportOfGoodsAndServices = parseFloat(exportOfGoodsAndServices);
        this.importOfGoodsAndServices = parseFloat(importOfGoodsAndServices);
        this.netEarningsFromAbroad = parseFloat(netEarningsFromAbroad);
        this.netTransferPayments = parseFloat(netTransferPayments);
    };

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: goods & services (exports), goods & services(imports), net earnings from abroad, net transfer payments
        const x = this.exportOfGoodsAndServices;
        const m = this.importOfGoodsAndServices;
        const ny = this.netEarningsFromAbroad;
        const nct = this.netTransferPayments;
        //solve using current account formula
        const currentAccount = (x-m) + ny + nct;
        return currentAccount;
    };
}

//Current Account to GDP Ratio
class CAGDPRatio {
    constructor(currentAccount, gdp) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.currentAccount = parseFloat(currentAccount);
        this.gdp = parseFloat(gdp);
    };

    solve() {
        //@Desc: Store variables to use in formula
        //variables: current account, gross domestic product
        const ca = this.currentAccount;
        const gdp = this.gdp;
        //solve by getting ratio of current account to gdp
        return ca/gdp * 100;
    };
}

//Government Debt to GDP Ratio
class GDGDPRatio{
    constructor(governmentDebt, gdp) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.governmentDebt = parseFloat(governmentDebt);
        this.gdp = parseFloat(gdp);
    };

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: government debt, gross domestic product
        const gd = this.governmentDebt;
        const gdp = this.gdp;
        //solve by getting ratio of government debt to gdp
        return gd/gdp * 100;
    };
}

//Real GDP Quaterly Growth Rate
class RealGDPQuaterlyGrowthRateFormula {
    constructor(gdpQ1, gdpQ2) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.gdpQ1 = parseFloat(gdpQ1);
        this.gdpQ2 = parseFloat(gdpQ2);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: prior quarter gdp, recent/current quarter gdp
        const q1 = this.gdpQ1;
        const q2 = this.gdpQ2;
        //solve using growth rate formula
        const growth = (q2 - q1)/q1;
        return growth;
    }
}

//Real GDP Annual Growth Rate
class RealGDPAnnualGrowthRateFormula {
    constructor(gdpPreviousYear, gdpCurrentYear) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.gdpPreviousYear = parseFloat(gdpPreviousYear);
        this.gdpCurrentYear = parseFloat(gdpCurrentYear);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: prior year gdp, recent/current year gdp
        const y1 = this.gdpPreviousYear;
        const y2 = this.gdpCurrentYear;
        //solve using the growth rate formula
        const growth = (y2-y1)/y1;
        return growth;
    }
}

//GDP Deflator
class GDPDeflatorFormula {
    constructor(nominalGDP, realGDP) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.nominalGDP = parseFloat(nominalGDP);
        this.realGDP = parseFloat(realGDP);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: nominal gdp, real gdp
        const n = this.nominalGDP;
        const r = this.realGDP;
        //solve using gdp deflator formula
        const deflator = (n/r)*100;
        return deflator;
    }
}

//Real GDP
class RealGDPFormula {
    constructor(nominalGDP, gdpDeflator) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.nominalGDP = parseFloat(nominalGDP);
        this.gdpDeflator = parseFloat(gdpDeflator);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: nominal gross domestic product, gross domestic product deflator
        const n = this.nominalGDP;
        const d = this.gdpDeflator;
        //solve using the real gdp formula
        const gdp = n/d;
        return gdp;
    }
}

//Inflation Rate
class InflationRateFormula {
    constructor(pastConsumerPriceIndex, currentConsumerPriceIndex) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.pastConsumerPriceIndex = parseFloat(pastConsumerPriceIndex);
        this.currentConsumerPriceIndex = parseFloat(currentConsumerPriceIndex);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: past consumer price index, current consumer price index
        const a = this.pastConsumerPriceIndex;
        const b = this.currentConsumerPriceIndex;
        //solve using inflation rate formula
        const inflationRate = ((b-a)/a)*100;
        return inflationRate;
    }
}

//Simple Interest Rate
class InterestRateFormula {
    constructor(simpleInterest, principalAmount, timePeriod) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.simpleInterest = parseFloat(simpleInterest);
        this.principalAmount = parseFloat(principalAmount);
        this.timePeriod = parseFloat(timePeriod);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: simple interest, principal amount, time period
        const si = this.simpleInterest;
        const p = this.principalAmount;
        const t = this.timePeriod;
        //solve using interest rate formula
        const interestRate = (si * 100)/(p * t);
        return interestRate;
    }
}

//Compound Interest Rate
class CompoundInterestRateFormula {
    constructor(principalAmount, rateOfInterest, timePeriod, compoundInterest){
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.principalAmount = parseFloat(principalAmount);
        this.rateOfInterest = parseFloat(rateOfInterest);
        this.timePeriod = parseFloat(timePeriod);
        this.compoundInterest = parseFloat(compoundInterest);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: principal amount, rate of interest, time period
        const p = this.principalAmount;
        const r = this.rateOfInterest;
        const t = this.timePeriod;
        const ci = (p(1+(r/100))**t)-p;
        return ci;
    }
}

//Unemployment Rate
class UnemploymentRateFormula {
    constructor(numberOfUnemployedPeople, labourForce) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.numberOfUnemployedPeople = parseFloat(numberOfUnemployedPeople);
        this.labourForce = parseFloat(labourForce);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: number of unemployed people, number of labourers in labour force
        const up = this.numberOfUnemployedPeople;
        const l = this.labourForce;
        //solve using unemployment rate formula
        const unemploymentRate = (up/l) * 100;
        return unemploymentRate;
    }
}

//Net Exports
class NetExportsFormula {
    constructor(valueOfExports, valueOfImports) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parss values into integers to be used in formula
        */
        this.valueOfExports = parseFloat(valueOfExports);
        this.valueOfImports = parseFloat(valueOfImports);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: value of exports, value of imports
        const e = this.valueOfExports;
        const i = this.valueOfImports;
        //solve using net exports formula
        const nx = e-i;
        return nx;
    }
}

//Depreciation
// 1. Straight-Line Depreciation Formula
//2. Double Declining Balance Depreciation Formula
//3. Units of Production Depreciation Formula
//4. Sum of Years Digits Depreciation Formula

class StraightLineDepreciationFormula {
  constructor(cost, salvageValue, assetLifespan) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parse values into integers to be used in formula
        */
        this.cost = parseFloat(cost);
        this.salvageValue = parseFloat(salvageValue);
        this.assetLifespan = parseFloat(assetLifespan);
  }

  solve() {
        //@Desc: Store variables to use in formula
        //@variables: cost, salvage value, asset lifespan
        const c = this.cost;
        const sv = this.salvageValue;
        const ls = this.assetLifespan;
        //solve using straight-line depreciation formula
        const depreciation = (c-sv)/ls;
        return depreciation;
  }
}

class DoubleDecliningBalanceDepreciationFormula {
    constructor(startingBookValue, assetLifespan) {
        /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parse values into integers to be used in formula
        */
        this.startingBookValue = parseFloat(startingBookValue);
        this.assetLifespan = parseFloat(assetLifespan);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: starting book value, asset lifespan, rate of depreciation
        const sbv = this.startingBookValue;
        const ls = this.assetLifespan;
        //calculate rate of depreciation using lifespan 
        // and rate of depreciation formula
        //We'll name it 'rd'
        const rd = ((1/1)/ls)*2;
        //solve using double declining balance depreciation formula
        const periodicDepreciation = sbv * rd;
        return periodicDepreciation;
    }
}

class UnitsOfProductionDepreciationFormula {
    constructor(numOfUnitsProduced, lifespanUnits, cost, salvageValue) {
         /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parse values into integers to be used in formula
        */
        this.numOfUnitsProduced = parseFloat(numOfUnitsProduced);
        this.lifespanUnits = parseFloat(lifespanUnits);
        this.cost = parseFloat(cost);
        this.salvageValue = parseFloat(salvageValue);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: number of units produced, lifespan in units, cost, salvage value
        const p = this.numOfUnitsProduced;
        const l = this.lifespanUnits;
        const c = this.cost;
        const sv = this.salvageValue;
        //solve using units of production depreciation formula
        const depreciation = (p/l)*(c-sv);
        return depreciation;
    }
}

class SumOfYearsDigitsDepreciation {
    constructor(remainingLife, sumOfYearsDigits, cost, salvageValue){
         /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parse values into integers to be used in formula
        */
        this.remainingLife = parseFloat(remainingLife);
        this.sumOfYearsDigits = parseFloat(sumOfYearsDigits);
        this.cost = parseFloat(cost);
        this.salvageValue = parseFloat(salvageValue);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: remaining life of asset, sum of the years, cost, salvage value
        const rl = this.remainingLife;
        const syd = this.sumOfYearsDigits;
        const c = this.cost;
        const sv = this.salvageValue;
        //solve using sum of years digits depreciation formula
        const depreciation = (rl/syd)*(c-sv);
        return depreciation;
    }
}

//Net Foreign Factor Income

class NetForeignFactorIncome {
    constructor(GNP, GDP) {
         /*@Desc: 
        * - Receive values passed into new Class instance
        * - Parse values into integers to be used in formula
        */
        this.GNP = parseFloat(GNP);
        this.GDP = parseFloat(GDP);
    }

    solve() {
        //@Desc: Store variables to use in formula
        //@variables: gross domestic product, gross national product
        const GNP = this.GNP;
        const GDP = this.GDP;
        //solve using net foreign factor income formula
        const nffi = GNP-GDP;
        return nffi;
    }
}

export {
    GDPExpApproach, 
    GDPIncomeApproach, 
    BalanceOfTradeFormula, 
    CurrentAccountFormula, 
    CAGDPRatio, 
    GDGDPRatio, 
    RealGDPQuaterlyGrowthRateFormula, 
    RealGDPAnnualGrowthRateFormula, 
    GDPDeflatorFormula, 
    RealGDPFormula, 
    InflationRateFormula, 
    InterestRateFormula, 
    CompoundInterestRateFormula,
    UnemploymentRateFormula,
    NetExportsFormula,
    StraightLineDepreciationFormula,
    DoubleDecliningBalanceDepreciationFormula,
    UnitsOfProductionDepreciationFormula,
    SumOfYearsDigitsDepreciation,
    NetForeignFactorIncome
};