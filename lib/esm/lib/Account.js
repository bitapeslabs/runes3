import axios from "axios";
import { Balances } from "./Balance";
export class AnonymousAccount {
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
                const response = (await axios.get(`${this.__Runes3.rpc_endpoint}/balances/address/${this.address}`)).data;
                if (response.status === false) {
                    console.log(response);
                    throw new Error(response.error);
                }
                const balances = new Balances(response.balances);
                resolve(balances);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
export class OwnedAccount extends AnonymousAccount {
    constructor({ address, private_key, __Runes3, }) {
        super({ address, __Runes3 });
        this.private_key = private_key;
    }
}
