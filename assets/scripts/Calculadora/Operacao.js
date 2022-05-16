export default class Operacao {
    operacao;
    constructor(operacao = []) {
        this.operacao = operacao;
    }
    adicionar(valor) {
        return this.operacao.push(valor);
    }
    get length() {
        return this.operacao.length;
    }
}
