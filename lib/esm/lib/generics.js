export class Map {
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
