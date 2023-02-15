import GeoObject from "./geoobject.js";

export default class Rect extends GeoObject {

    constructor(x, y, width, height) {
        super({params: ['x', 'y', 'width', 'height']});
        if(x instanceof Rect) this.setValue(x);
        else this.setValue(x, y, width, height);
    }

    get left( ) { return this.x }
    set let(n)  {this.x = n}

    get right( ) {return this.x + this.width}
    set right(n) {this.x = n - this.width}

    get top( ) {return this.y}
    set top(n) {this.y = n}

    get bottom( ) {return this.y + this.height}
    set bottom(n) {this.y = n - this.height}

    get top_left( ) {return [this.x, this.y]}

    get bottom_right( ) {return [this.x + this.width, this.y + this.height]}
}