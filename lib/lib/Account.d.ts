import * as types from "../types/index";
import { Runes3 } from "..";
import { Balances } from "./Balance";
export interface IAccount {
    address: string;
    __Runes3: types.IRunes3;
}
export interface IOwnedAccount {
    address: string;
    private_key: string;
}
export declare class AnonymousAccount implements IAccount {
    address: string;
    __Runes3: Runes3;
    constructor({ address, __Runes3 }: {
        address: string;
        __Runes3: Runes3;
    });
    getBalances(): Promise<Balances>;
}
export declare class OwnedAccount extends AnonymousAccount implements IOwnedAccount {
    private_key: string;
    constructor({ address, private_key, __Runes3, }: {
        address: string;
        private_key: string;
        __Runes3: Runes3;
    });
}
