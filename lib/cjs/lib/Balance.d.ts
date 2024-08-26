import * as types from "../types/index";
import { Map } from "./generics";
export interface IBalanceEntryFull {
    balance: string;
    rune: types.IRune;
}
export interface IAccountLatestBalances extends types.RPCResponse {
    address: string;
    balances: IBalancesResponse;
}
export interface IBalancesResponse {
    [key: string]: IBalanceEntryFull;
}
export interface IBalance {
    balance: string;
    rune: types.IRune;
    getAmount(): string;
}
export declare class Balances extends Map<IBalance> {
    constructor(balances: IBalancesResponse);
}
export declare class Balance implements IBalance {
    balance: string;
    rune: types.IRune;
    constructor({ balance, rune }: {
        balance: string;
        rune: types.IRune;
    });
    getAmount(): string;
}
