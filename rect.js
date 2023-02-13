export default class Rect {

    #data = new Float32Array(4);

    constructor(x, y, width, height) {
        if(x instanceof Rect) this.#data.set()
        else this.#data.set([x, y, x + width, y + height]);
    }

    get x( ) {return this.#data[0]}
    set x(n) {this.#data[0] = n}

    get y( ) {return this.#data[0]}
    set y(n) {this.#data[0] = n}

    get width( ) {return this.#data[2] - this.#data[0]}
    set width(n) {this.#data[2] = this.#data[0] + n}
    
    get height( ) {return this.#data[3] - this.#data[1]}
    set height(n) {this.#data[3] = this.#data[1] + n}

    get left( ) {return this.#data[0]}
    set left(n) {this.x = n}

    get right( ) {return this.#data[2]}
    set right(n) {this.x = n - this.width}

    get top( ) {return this.#data[1]}
    set top(n) {this.y = n}

    get bottom( ) {return this.#data[3]}
    set bottom(n) {this.#data[1] = n - this.height}

    get topLeft( ) { return this.#data.subarray(0, 3)}
    get bottomRight( ) {return this.#data.subarray(2, 4)}

}