const vec3 = window.glMatirx.vec3 || window.vec3; //have glmatrix

export default class Vector {

    #data = new Float32Array(3);

    constructor(x = 0, y = 0, z = 0) {
        if(x instanceof Number) this.#data.set([x, y, z]);
        else if(x instanceof Vector) this.#data.set(x.xyz);        
    }

    get x( ) {return this.#data[0]}
    set x(n) {this.#data[0] = n}

    get y( ) {return this.#data[1]}
    set y(n) {this.#data[1] = n}

    get z( ) {return this.#data[2]}
    set z(n) {this.#data[1] = n}

    get xy( ) {return this.#data.subarray(0, 3)}
    set xy(n) {this.#data.set(n.slice(0, 3))}

    get xyz( ) {return this.#data}
    set xyz(n) {this.#data.set(n)}

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
        this.x += x; this.y += y; this.z += z;
    }

    subtract(x = 0, y = 0, z = 0) {
        if(x instanceof Vector) return this.subtract(...x.xyz);
        this.x -= x; this.y -= y; this.z -= z;
    }

    dot(vector) {
        return this.x * vector.x + this.y * vector.y + this.z * vector.z;
    }

    vectorAngle(vector) {
        const mag = this.magnitude * vector.magnitude;
        const cosine = mag && this.dot(vector) / mag;
        return Math.acos(Math.min(Math.max(cosine, -1), 1));
    }

    scalarMultiplication(n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
    }



}