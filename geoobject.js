export default class GeoObject {

    #data;

    constructor(config) {
        this.#data = new Float32Array(config.params.length);
        config.params.forEach(this.#defineParameter.bind(this))
    }

    get value( ) {
        return [...this.#data]
    }

    #defineParameter(name, index) {
        Object.defineProperty(this, name, {
            get( ) {return this.#data[index]},
            set(n) { this.#data[index] = n }
        });
    }

    setValue(...params) {
        if(params[0] instanceof GeoObject) return this.setValue(...params[0].value.slice(0, this.#data.length));
        this.#data.set(params.slice(0, this.#data.length));
        return this;
    }

}