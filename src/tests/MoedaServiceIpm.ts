import { MoedaService } from '../main/MoedaService'; 

export class MoedaServiceImpl implements MoedaService {
    buscar(moeda: string): string {
        return `Detalhes da moeda: ${moeda}`;
    }
}