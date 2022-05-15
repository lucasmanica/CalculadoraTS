export default class Tela {

    constructor(
        private elemento: HTMLDivElement | null = document.querySelector("#values"),
    ) {
        this.conteudo = "0";
    }

    set conteudo(valor: string) {
        if (valor.toString().length > 12) {
            valor = "Erro";
        }
        if(this.elemento) {
            this.elemento.innerHTML = valor.toString().replace('.', ',');
        }
    }
    get conteudo(): string {
       return this.elemento ? this.elemento.innerHTML : "0";
    }
}