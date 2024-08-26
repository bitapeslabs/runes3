import * as types from "../types";
export declare class Map<T> implements types.IMap<T> {
    map: {
        [key: string]: T;
    };
    get(key: string): T;
    keys: () => string[];
    all: () => {
        [key: string]: T;
    };
}
