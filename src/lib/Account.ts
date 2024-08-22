import * as types from "../types/index";
import { Runes3 } from "..";
import { Balance } from "./Balance";
import axios, { AxiosResponse } from "axios";
import { log } from "../utils";
import * as constants from "../constants";
import { Map } from "./generics";
import { Balances, IAccountLatestBalances } from "./Balance";
export interface IAccount {
  address: string;
  __Runes3: types.IRunes3;
}

export interface IOwnedAccount {
  address: string;
  private_key: string;
}
export class AnonymousAccount implements IAccount {
  address: string = "";
  __Runes3: Runes3;

  constructor({ address, __Runes3 }: { address: string; __Runes3: Runes3 }) {
    if (!address) throw new Error("No address provided");
    this.address = address;
    this.__Runes3 = __Runes3;
  }

  getBalances(): Promise<Balances> {
    return new Promise(async (resolve, reject) => {
      try {
        const response: IAccountLatestBalances = (
          await axios.get(
            `${this.__Runes3.rpc_endpoint}/balances/address/${this.address}`
          )
        ).data;

        if (response.status === false) {
          console.log(response);
          throw new Error(response.error);
        }

        const balances: Balances = new Balances(response.balances);

        resolve(balances);
      } catch (error) {
        console.log(error);
      }
    });
  }
}

export class OwnedAccount extends AnonymousAccount implements IOwnedAccount {
  private_key: string;
  constructor({
    address,
    private_key,
    __Runes3,
  }: {
    address: string;
    private_key: string;
    __Runes3: Runes3;
  }) {
    super({ address, __Runes3 });
    this.private_key = private_key;
  }
}
