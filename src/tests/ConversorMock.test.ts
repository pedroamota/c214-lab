import { ConverteMoeda } from '../main/ConverteMoeda'; 
import { Moeda } from '../main/Moeda'; 
import { MoedaService } from '../main/MoedaService'; 

jest.mock('../main/MoedaService', () => {
    return {
      MoedaService: jest.fn().mockImplementation(() => {
        return {
          buscar: (nome: string): string => {
            if (nome === 'Real') {
              return JSON.stringify({ nome: 'Real', valor: 5 });
            } else if (nome === 'Bitcoin') {
              return JSON.stringify({ nome: 'Bitcoin', valor: 0.000015 });
            } else if (nome === 'Dolar') {
              return JSON.stringify({ nome: 'Dolar', valor: 1 });
            }
            throw new Error('Moeda não encontrada');
          },
        };
      }),
    };
});

describe('ConverteMoeda', () => {
    let converteMoeda: ConverteMoeda;

    beforeEach(() => {
        converteMoeda = new ConverteMoeda(new MoedaService());
    });

    test('buscaMoeda deve retornar uma instância de Moeda corretamente', () => {
        const moeda = converteMoeda.buscaMoeda('Real');
        expect(moeda.nome).toBe('Real');
        expect(moeda.valor).toBe(5);
    });

    test('conversor deve converter corretamente entre moedas', () => {
        const resultado = converteMoeda.conversor('Real', 'Dolar', 10);
        expect(resultado).toBeCloseTo(2); // Considerando 1 Dolar = 5 Reais
    });

    // Adicionando mais casos de teste para aumentar a cobertura
    test('conversor deve lidar corretamente com moedas inexistentes', () => {
        expect(() => converteMoeda.conversor('Euro', 'Dolar', 10)).toThrowError('Moeda não encontrada');
    });

    test('conversor deve lidar corretamente com valores negativos', () => {
        expect(() => converteMoeda.conversor('Real', 'Dolar', -10)).toThrowError('Valor negativo não é permitido');
    });
});
