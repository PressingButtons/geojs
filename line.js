import GeoObject from "./geoobject.js";
import Point from "./point.js";
import Vector from "./vector.js";

export default class Line extends GeoObject{

    constructor(x1, y1, x2, y2) {
        super({params: ['x1', 'y1', 'x2', 'y2']});
        this.setValue(x1, y1, x2, y2);
    }

    get length( ) {
        const x_c = Math.pow(this.x2 - this.x1, 2);
        const y_c = Math.pow(this.y2 - this.y1, 2);
        return Math.pow(x_c + y_c, 0.5);
    }

    get origin( ) {
        return [this.x1, this.y1];
    }

    get endpoint( ) {
        return [this.x2, this.y2];
    }

    get vector( ) {
        return [this.x2 - this.x1, this.y2 - this.y1, 0]
    }

    setOrigin(x, y) {
        if(x instanceof Point || x instanceof Vector) this.setValue(...x.value.slice(0, 3))
        else this.setValue(x, y, this.x2, this.y2);
        return this;
    }

    setEndPoint(x, y) {
        if(x instanceof Point || x instanceof Vector) this.setValue(...x.value.slice(0, 3))
        else this.setValue(this.x1, this.y1, x, y);
        return this;
    }

}