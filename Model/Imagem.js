class Imagem {
    constructor(referencia, titulo) {
        this.referencia = referencia;
        this.titulo = titulo;
        
        const date = new Date();
        this.data_criacao = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;;
    }
}

module.exports = Imagem;