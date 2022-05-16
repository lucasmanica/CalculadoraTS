export default class Operacao {

    constructor(
        private operacao: string[] = []
    ) {

    }
    adicionar(valor: string): number {
        return this.operacao.push(valor);
    }
    get length(): number {
        return this.operacao.length;
    }
}