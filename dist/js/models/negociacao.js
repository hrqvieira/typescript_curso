export class Negociacao {
    constructor(_data, quantidade, valor, desc) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
        this.desc = desc;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
