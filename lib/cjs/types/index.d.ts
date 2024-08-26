export interface IRunes3 {
    rpc_endpoint: string;
}
export interface IRune {
    rune_protocol_id: string;
    name: string;
    raw_name: string;
    symbol: string;
    spacers: number;
    total_supply: string;
    decimals: number;
    premine: string;
    mints: string;
    mint_cap: string | null;
    mint_start: string | null;
    mint_end: string | null;
    mint_offset_start: string | null;
    mint_offset_end: string | null;
    mint_amount: string;
    burnt_amount: string;
    unmintable: number;
    etch_transaction: string;
    deployer_address: string;
}
export interface RPCResponse {
    status?: boolean;
    error?: string;
}
export interface IMap<T> {
    map: {
        [key: string]: T;
    };
    get(key: string): T;
}
