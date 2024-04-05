import { Moeda } from './Moeda.js';
import { MoedaService } from './MoedaService';

export class ConverteMoeda {
    moedaService: MoedaService;

    constructor(service: MoedaService) {
        this.moedaService = service;
    }

    buscaMoeda(moedaNome: string): Moeda {
        const inimigoJson = this.moedaService.buscar(moedaNome);

        const jsonObject = JSON.parse(inimigoJson);

        return new Moeda(
            jsonObject.nome,
            jsonObject.valor,
        );
    }

    conversor(nomeMoeda1: string, nomeMoeda2: string, valorMoeda1: number): number {
        const moeda1 = this.buscaMoeda(nomeMoeda1);
        const moeda2 = this.buscaMoeda(nomeMoeda2);

        let result = (valorMoeda1 * moeda2.valor)/ moeda1.valor;

      return result;
    }
}
