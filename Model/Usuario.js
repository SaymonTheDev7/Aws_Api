class Usuario {
    constructor(nome) {
        this.nome = nome;
        
        const date = new Date();
        this.data_criacao = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;;
    }
}

module.exports = Usuario;