"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Runes3 = void 0;
const utils_1 = require("./utils");
const constants = __importStar(require("./constants"));
const Account_1 = require("./lib/Account");
class Runes3 {
    rpc_endpoint = "";
    constructor(rpc_endpoint) {
        if (!rpc_endpoint) {
            (0, utils_1.log)("No RPC endpoint was provided, default RPC from satsignal will be used instead.", "warn");
            (0, utils_1.log)(`You can get your own endpoint for free at https://${constants.RPC_PROVIDER_BASE_DOMAIN} to get rid of this warning or run your own node with: ${constants.NODE_REPO}`, "tip");
        }
        //Use rpc_endpoint provided or public endppoint from satsignal
        this.rpc_endpoint = rpc_endpoint ?? constants.RPC_PROVIDER;
    }
    // Add a method to the class
    getAccount(address, private_key) {
        if (!private_key)
            return new Account_1.AnonymousAccount({ address, __Runes3: this });
        return new Account_1.OwnedAccount({ address, private_key, __Runes3: this });
    }
}
exports.Runes3 = Runes3;
