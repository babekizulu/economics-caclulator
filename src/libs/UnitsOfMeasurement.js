/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: An object containing units of measurement that I find useful
* @Date: 2022/08/29
* @TODO: 
*   - Add more currencies
*/
const UnitsOfMeasurement = {
    symbols: {
        percent: '%',
        n: 'n' //number of times
    },
    currency: {
        rands: 'R',
        dollars: '$',
        pounds: '£'
    },
    timePeriods: {
        quarters: 'Quarters',
        months: 'Months',
        years: 'Years'
    },
    misc: {
        units: 'Units',
        points: 'Points'
    }
};

const {symbols, currency, timePeriods, misc} = UnitsOfMeasurement;

export {
    symbols, 
    currency, 
    timePeriods,
    misc
};