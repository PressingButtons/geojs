import GeoObject from "./geoobject.js";

export default class Point extends GeoObject {

    constructor(x = 0, y = 0) {
        super({params: ['x', 'y']});
        if(x instanceof GeoObject) return this.setValue(x);
        this.setValue(x, y);
    }

    add(x, y) {
        if(x instanceof GeoObject) return this.add(...x.value);
        this.x += x;
        this.y += y;
        return this;
    }

    subtract(x, y) {
        if(x instanceof GeoObject) return this.subtract(...x.value);
        this.x -= x;
        this.y -= y;
        return this;
    }

    multiply(x, y) {
        if(x instanceof GeoObject) return this.multiply(...x.value);
        this.x *= x;
        this.y *= y;
        return this;
    }

    multiplyScalar(n) {
        this.x *= n;
        this.y *= n;
        return this;
    }

    divide(x, y) {
        if(x instanceof GeoObject) return this.divide(...x.value);
        this.x /= x;
        this.y /= y;
        return this;
    }

    divideScalar(n) {
        this.x /= n;
        this.y /= n;
        return this;
    }

}