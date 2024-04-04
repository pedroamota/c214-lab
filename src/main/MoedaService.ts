interface MoedaService {
    converter(moeda1: string, moeda2: string): number;
    buscar(moeda: string): number;
  }
  