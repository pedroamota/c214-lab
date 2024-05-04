export class Moeda {
    private _nome: string;
    private _valor: number;

    constructor(nome: string, valor: number) {
        this._nome = nome;
        this._valor = valor;
    }

    get nome(): string {
        return this._nome;
    }
    get valor(): number {
        return this._valor;
    }

    set nome(novoNome: string) {
        this._nome = novoNome;
    }
    set valor(novoValor: number) {
        this._valor = novoValor;
    }
}
