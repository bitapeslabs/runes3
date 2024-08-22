"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Balance = exports.Balances = void 0;
const generics_1 = require("./generics");
class Balances extends generics_1.Map {
    constructor(balances) {
        super();
        Object.keys(balances).forEach((key) => {
            this.map[key] = new Balance(balances[key]);
        }, {});
    }
}
exports.Balances = Balances;
class Balance {
    balance = "";
    rune;
    constructor({ balance, rune }) {
        this.balance = balance;
        this.rune = rune;
    }
    parse() {
        // Ensure balance and decimals are BigInt
        const balanceBigInt = BigInt(this.balance);
        const decimalsBigInt = BigInt(this.rune.decimals);
        // Calculate 10 ** decimals and 10 ** decimalPlaces
        const factor = BigInt(10) ** decimalsBigInt;
        const decimalFactor = BigInt(10) ** BigInt(this.rune.decimals);
        // Calculate the integer part
        const integerPart = balanceBigInt / factor;
        // Calculate the fractional part (remainder), then scale it
        const remainder = balanceBigInt % factor;
        const fractionalPart = (remainder * decimalFactor) / factor;
        // Combine both parts as strings
        const result = `${integerPart.toString()}.${fractionalPart
            .toString()
            .padStart(this.rune.decimals, "0")}`;
        return result;
    }
}
exports.Balance = Balance;
