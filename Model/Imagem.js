class Imagem {
    constructor(referencia, usuario_id) {
        this.referencia = referencia;
        this.usuario_id = usuario_id;
        
        const date = new Date();
        this.data_criacao = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;;
    }
}

module.exports = Imagem;