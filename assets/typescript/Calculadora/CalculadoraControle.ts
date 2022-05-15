import DataHora from "./DataHora.js";
import Tela from "./Tela.js";
export default class CalculadoraControle {
    constructor(
        private tela = new Tela(),
    ) {
        
        new DataHora();
        
    }
}