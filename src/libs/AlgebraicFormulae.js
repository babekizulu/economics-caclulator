/*
* @Author: Lwandle Babekizulu Dlamini
* @Desc: Rule sets for algebraic expressions
* @Date: 2022/09/19
*/
class ExponentRules {
    constructor(operandX, operandY, powerN, powerM) {
        this.operandX = parseInt(operandX);
        this.operandY = parseInt(operandY);
        this.powerN = parseInt(powerN);
        this.powerM = parseInt(powerM);
    };

    solveProductRule() {
        const x = this.operandX;
        const n = this.powerN;
        const m = this.powerM;

        return x**(n+m);
    };

    solveQuotientRule() {
        const x = this.operandX;
        const n = this.powerN;
        const m = this.powerM;

        return x**(n-m);
    };

    solvePowerRule() {
        const x = this.operandX;
        const n = this.powerN;
        const m = this.powerM;

        return x**(n*m);
    };

    solvePowerZeroRule() {
        return 1;
    };

    solveNegativeExponentRule() {
        const x = this.operandX;
        const n = this.powerN;

        return 1/x**n;
    };

    solveFractionalExponentRule() {
        const x = this.operandX;
        const n = this.powerN;

        return x**(1/n);
    };

    solveDistExpProduct() {
        const x = this.operandX;
        const y = this.operandY;
        const n = this.powerN;

        return (x**n)*(y**n);
    };

    solveDistExpQuotient() {
        const x = this.operandX;
        const y = this.operandY;
        const n = this.powerN;

        return (x**n)/(y**n);
    };
};

export {
    ExponentRules
}