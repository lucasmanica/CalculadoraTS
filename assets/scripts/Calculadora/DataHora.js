export default class DataHora {
    elementoData;
    elementoHora;
    constructor(elementoData = document.querySelector("#datetime > div:nth-child(2)"), elementoHora = document.querySelector("#datetime time")) {
        this.elementoData = elementoData;
        this.elementoHora = elementoHora;
        this.renderizar();
        setInterval(() => this.renderizar(), 1000);
    }
    renderizar() {
        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        const mes = dataAtual.toLocaleDateString("pt-BR", {
            month: "long",
        });
        const ano = dataAtual.getFullYear();
        const hora = dataAtual.getHours();
        const minuto = dataAtual.getMinutes().toString().padStart(2, '0');
        const doisPontos = dataAtual.getSeconds() % 2 === 0 ? ":" : " ";
        this.data = `${dia} ${mes} ${ano}`;
        this.hora = `${hora}${doisPontos}${minuto}`;
    }
    set data(conteudo) {
        if (this.elementoData) {
            this.elementoData.innerHTML = conteudo;
        }
    }
    set hora(conteudo) {
        if (this.elementoHora) {
            this.elementoHora.innerHTML = conteudo;
        }
    }
}
