import * as types from "../types";

export class Map<T> implements types.IMap<T> {
  map: { [key: string]: T } = {};
  get(key: string): T {
    return this.map[key];
  }

  keys = (): string[] => {
    return Object.keys(this.map);
  };

  all = (): { [key: string]: T } => {
    return this.map;
  };
}
