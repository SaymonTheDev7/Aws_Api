const { response } = require('express');
const database = require('../Database/Connection')

class ImagemRepository {
    async criarImagem(imagem) {
        try {
            await database('imagem').insert(imagem);
            return { message: "Imagem criada com sucesso" };
        } catch (error) {
            throw new Error("Erro ao inserir imagem no banco de dados")
        }
    }

    async listarImagem() {
        try {
            const imagens = await database('imagem').select("*");
            return { imagens }
        } catch (error) {
            throw new Error("Erro ao listar as imagens");
        }
    }

    async buscarImagem(id) {
        try {
            const imagem = await database('imagem').select("*").where({id:id.id});
            return { imagem }
        } catch (error) {
            throw new Error("Erro ao buscar a imagens");
        }
    }
    
    async atualizarImagem(id, dados) {
        try {
            const resultado = await database('imagem')
                .where({ id })
                .update(dados);
    
            if (resultado === 0) {
                throw new Error("Imagem não encontrada");
            }
    
            return { message: "Imagem atualizada com sucesso" };
        } catch (error) {
            throw new Error("Erro ao atualizar a imagem");
        }
    }

    async removerImagem(id) {
        try {
            const resultado = await database('imagem')
                .where({ id })
                .del();
    
            if (resultado === 0) {
                throw new Error("Imagem não encontrada");
            }
    
            return { message: "Imagem deletada com sucesso" };
        } catch (error) {
            throw new Error("Erro ao deletar a imagem");
        }
    }

}

module.exports = new ImagemRepository();