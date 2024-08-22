import * as types from "./types/index";
import { AnonymousAccount, OwnedAccount } from "./lib/Account";
declare class Runes3 implements types.IRunes3 {
    rpc_endpoint: string;
    constructor(rpc_endpoint?: string);
    getAccount(address: string, private_key?: string): AnonymousAccount | OwnedAccount;
}
export { Runes3 };
