export default class Operacao {
    operacao;
    onCalculado;
    constructor(opts, operacao = []) {
        this.operacao = operacao;
        this.onCalculado = opts.onCalculado;
    }
    limpar() {
        this.operacao = [];
    }
    limparTela(length) {
        for (let i = 0; i <= length; i++) {
            this.operacao.pop();
        }
        if (this.operacao.length >= 1) {
            return this.obterResultado();
        }
        return '0';
    }
    adicionar(valor) {
        if (this.operacao.length === 3) {
            this.calcular();
        }
        return this.operacao.push(valor);
    }
    calcular() {
        let resultado = this.obterResultado();
        if (resultado.length > 12) {
            resultado = resultado.substring(0, 12);
        }
        this.operacao = [resultado];
        this.onCalculado(resultado);
    }
    obterResultado() {
        let resultado = "0";
        try {
            resultado = (eval(this.operacao.join(""))).toString();
        }
        catch (err) {
            resultado = "ERRO";
        }
        return resultado;
    }
    setPorcentagem() {
        if (this.operacao.length > 0) {
            const valorTodo = this.operacao[0];
            const valorPorcentagem = (Number(valorTodo) * Number(this.operacao[this.length - 1])) / 100;
            this.operacao.pop();
            this.operacao.push(valorPorcentagem.toString());
            return this.obterResultado();
        }
        return '0';
    }
    setPonto() {
        //  ['85', '+', '3']
        const ultimoValor = this.operacao[this.length - 1];
        const concatenarPonto = `${ultimoValor}.`;
        this.operacao[this.length - 1] = concatenarPonto;
        return this.operacao[this.length - 1];
        // ['4242.']
    }
    get ultimaPosicao() {
        return this.operacao.length ? this.operacao[this.operacao.length - 1] : "0";
    }
    set ultimaPosicao(valor) {
        const ultimoIndex = this.operacao.length ? this.operacao.length - 1 : 0;
        this.operacao[ultimoIndex] = valor;
    }
    get length() {
        return this.operacao.length;
    }
}
