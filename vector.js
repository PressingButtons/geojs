import GeoObject from "./geoobject.js";

export default class Vector extends GeoObject {

    constructor(x = 0, y = 0, z = 0) {
        super({params: ['x', 'y', 'z']});
        if(x instanceof GeoObject) return this.setValue(x);
        this.setValue(x, y, z);
    }

    get xy( ) {return [this.x, this.y]}

    get xyz( ) {return this.value}

    get magnitude( ) {
        const x_sq = this.x * this.x;
        const y_sq = this.y * this.y;
        const z_sq = this.z * this.z;
        return Math.pow(x_sq + y_sq + z_sq, 0.5);
    }

    get angle( ) {
        return Math.atan2(this.y, this.z);
    }
    add( x = 0, y = 0, z = 0) {
        if(x instanceof Vector) return this.add(...x.xyz);
        this.x += x;
        this.y += y;
        this.z += z;
        return this;
    }

    subtract(x = 0, y = 0, z = 0) {
        if(x instanceof Vector) return this.subtract(...x.xyz);
        this.x -= x;
        this.y -= y;
        this.z -= z;
        return this;
    }

    dot(vector) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }

    vectorAngle(vector) {
        const mag = this.magnitude * vector.magnitude;
        const cosine = mag && this.dot(vector) / mag;
        return Math.acos(Math.min(Math.max(cosine, -1), 1));
    }

    divide(x, y, z) {
        if(x instanceof Vector) return this.divide(...x.xyz)
        this.x /= x;
        this.y /= y;
        this.z /= z;
        return this;
    }

    divideScalar(n) {
        this.x /= n;
        this.y /= n;
        this.z /= n;
        return this;
    }

    multiply(x, y, z) {
        if(x instanceof Vector) return this.multiply(...x.xyz);
        this.x *= x;
        this.y *= y;
        this.z *= z;
        return this;
    }

    multiplyScalar(n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
        return this;
    }

}