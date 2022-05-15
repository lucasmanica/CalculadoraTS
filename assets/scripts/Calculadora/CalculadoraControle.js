import DataHora from "./DataHora.js";
import Tela from "./Tela.js";
export default class CalculadoraControle {
    tela;
    constructor(tela = new Tela()) {
        this.tela = tela;
        new DataHora();
    }
}
