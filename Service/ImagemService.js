const ImagemRepository = require('../Repository/ImagemRepository');
const Imagem = require('../Model/Imagem');

class ImagemService {
    async criarNovaImagem(referencia, titulo) {
        const novaImagem = new Imagem(referencia, titulo);
        return await ImagemRepository.criarImagem(novaImagem);
    }

    async listarImagem() {
        return await ImagemRepository.listarImagem();
    }

    async buscarImagem(id) {
        return await ImagemRepository.buscarImagem(id);
    }

    async atualizarImagem(id, referencia, titulo) {
        const dadosAtualizados = { referencia, titulo };
        return await ImagemRepository.atualizarImagem(id, dadosAtualizados);
    }

}



module.exports = new ImagemService();
