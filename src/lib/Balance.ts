import * as types from "../types/index";
import { Map } from "./generics";

// Interface representing each balance entry in the balances object
// Interface representing each balance entry in the balances object
export interface IBalanceEntryFull {
  balance: string;
  rune: types.IRune;
}

// Interface representing the main data structure
export interface IAccountLatestBalances extends types.RPCResponse {
  address: string;
  balances: IBalancesResponse;
}

// Interface representing the balances response
export interface IBalancesResponse {
  [key: string]: IBalanceEntryFull;
}

// Interface representing the collection of balances
// Interface representing a single balance entry
export interface IBalance {
  balance: string;
  rune: types.IRune;
  parse(): string;
}

export class Balances extends Map<IBalance> {
  constructor(balances: IBalancesResponse) {
    super();
    Object.keys(balances).forEach((key: string) => {
      this.map[key] = new Balance(balances[key]);
    }, {});
  }
}

export class Balance implements IBalance {
  balance: string = "";
  rune: types.IRune;

  constructor({ balance, rune }: { balance: string; rune: types.IRune }) {
    this.balance = balance;
    this.rune = rune;
  }

  parse(): string {
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
