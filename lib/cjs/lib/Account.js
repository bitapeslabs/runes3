"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnedAccount = exports.AnonymousAccount = void 0;
const axios_1 = __importDefault(require("axios"));
const Balance_1 = require("./Balance");
class AnonymousAccount {
    constructor({ address, __Runes3 }) {
        this.address = "";
        if (!address)
            throw new Error("No address provided");
        this.address = address;
        this.__Runes3 = __Runes3;
    }
    getBalances() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = (await axios_1.default.get(`${this.__Runes3.rpc_endpoint}/balances/address/${this.address}`)).data;
                if (response.status === false) {
                    console.log(response);
                    throw new Error(response.error);
                }
                const balances = new Balance_1.Balances(response.balances);
                resolve(balances);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.AnonymousAccount = AnonymousAccount;
class OwnedAccount extends AnonymousAccount {
    constructor({ address, private_key, __Runes3, }) {
        super({ address, __Runes3 });
        this.private_key = private_key;
    }
}
exports.OwnedAccount = OwnedAccount;
