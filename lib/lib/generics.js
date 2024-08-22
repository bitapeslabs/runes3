"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Map = void 0;
class Map {
    map = {};
    get(key) {
        return this.map[key];
    }
    keys = () => {
        return Object.keys(this.map);
    };
    all = () => {
        return this.map;
    };
}
exports.Map = Map;
