export default class DataHora {

    constructor (
        private  elementoData: HTMLDivElement | null  = document.querySelector("#datetime > div:nth-child(2)"),
        private  elementoHora: HTMLTimeElement | null  = document.querySelector("#datetime time")
    ) {
        this.renderizar();
        setInterval(() => this.renderizar(), 1000);
       
    }
    renderizar() {

        const dataAtual: Date = new Date();
        const dia: number = dataAtual.getDate();
        const mes: string = dataAtual.toLocaleDateString("pt-BR", {
            month: "long",
        });
        const ano: number = dataAtual.getFullYear();
        const hora: number = dataAtual.getHours();
        const minuto: number | string   = dataAtual.getMinutes().toString().padStart(2, '0');
        
        const doisPontos: string = dataAtual.getSeconds() % 2 === 0 ? ":" : " ";
        this.data = `${dia} ${mes} ${ano}`;
        this.hora = `${hora}${doisPontos}${minuto}`
    }
    set data(conteudo: string) {
        if (this.elementoData) {
            this.elementoData.innerHTML = conteudo
        }
    }
    set hora(conteudo: string) {
        if (this.elementoHora) {
            this.elementoHora.innerHTML = conteudo
        }
    }
}