class Moeda {
    private _valor: number;

    constructor(valor: number) {
        this._valor = valor;
    }

    get valor(): number {
        return this._valor;
    }

    set valor(novoValor: number) {
        this._valor = novoValor;
    }
}
