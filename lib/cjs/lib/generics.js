"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
class Map {
    constructor() {
        this.map = {};
        this.keys = () => {
            return Object.keys(this.map);
        };
        this.all = () => {
            return this.map;
        };
    }
    get(key) {
        return this.map[key];
    }
}
exports.Map = Map;
