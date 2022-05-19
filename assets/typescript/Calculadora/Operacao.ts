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
    limpar(): void {
        this.operacao = []
    }
    limparTela(length: number): string {
        for (let i = 0; i <= length; i++) {
            this.operacao.pop();
        }
        if(this.operacao.length >= 1) {
            return this.obterResultado()
        }
        return '0'
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
    setPorcentagem(): string {
        if(this.operacao.length > 0) {
            const valorTodo = this.operacao[0];
            const valorPorcentagem = (Number(valorTodo) * Number(this.operacao[this.length - 1])) / 100;
            this.operacao.pop();
            this.operacao.push(valorPorcentagem.toString())
            return this.obterResultado();
        }
        return '0'
    }
    setPonto(): string {
        //  ['85', '+', '3']
        const ultimoValor = this.operacao[this.length - 1];
        const concatenarPonto: string = `${ultimoValor}.`;
        this.operacao[this.length - 1] = concatenarPonto;
        return this.operacao[this.length - 1]
        // ['4242.']
        

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