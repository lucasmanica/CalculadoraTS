interface OperacaoOpcoes {
    onCalculado: Function
}

export default class Operacao {
    private onCalculado: Function;
    constructor(
        opts:  OperacaoOpcoes,
        private operacao: string[] = []
    ) {
        this.onCalculado = opts.onCalculado
    }
    adicionar(valor: string): number {
        if (this.operacao.length === 3) {
            this.calcular();
        }
        return this.operacao.push(valor);
    }
    calcular(): void {
        let resultado = this.obterResultado();
        if(resultado.length > 12) {
            resultado = resultado.substring(0, 12)
        }
        this.operacao = [resultado]
        this.onCalculado(resultado)
    }
    obterResultado(): string {
        let resultado: string = "0";
        try {
            resultado = (eval(this.operacao.join(""))).toString();
        } catch(err) {
            resultado = "ERRO"
        }
        return resultado

    }
    get ultimaPosicao(): string {
        return this.operacao.length ? this.operacao[this.operacao.length - 1] : "0"
    }

    set ultimaPosicao(valor: string) {
        const ultimoIndex = this.operacao.length ? this.operacao.length - 1 : 0;
        this.operacao[ultimoIndex] = valor;
    }

    get length(): number {
        return this.operacao.length;
    }
}