import { Moeda } from '../main/Moeda.js';

class MoedasConst {

  static readonly REAL: Moeda = new Moeda('Real', 4.57);
  static readonly BITCOIN: Moeda = new Moeda('Bitcoin', 0.000015);
  static readonly DOLAR: Moeda = new Moeda('Dolar', 1);

}