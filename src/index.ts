import * as types from "./types/index";
import { log } from "./utils";
import * as constants from "./constants";
import { AnonymousAccount, OwnedAccount } from "./lib/Account";

class Runes3 implements types.IRunes3 {
  rpc_endpoint: string = "";
  constructor(rpc_endpoint?: string) {
    if (!rpc_endpoint) {
      log(
        "No RPC endpoint was provided, default RPC from satsignal will be used instead.",
        "warn"
      );
      log(
        `You can get your own endpoint for free at https://${constants.RPC_PROVIDER_BASE_DOMAIN} to get rid of this warning or run your own node with: ${constants.NODE_REPO}`,
        "tip"
      );
    }

    //Use rpc_endpoint provided or public endppoint from satsignal
    this.rpc_endpoint = rpc_endpoint ?? constants.RPC_PROVIDER;
  }

  // Add a method to the class
  getAccount(
    address: string,
    private_key?: string
  ): AnonymousAccount | OwnedAccount {
    if (!private_key) return new AnonymousAccount({ address, __Runes3: this });

    return new OwnedAccount({ address, private_key, __Runes3: this });
  }
}

export { Runes3 };
