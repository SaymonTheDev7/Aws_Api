const { response } = require('express');
const database = require('../Database/Connection')

class UsuarioRepository {
    async criarUsuario(usuario) {
        try {
            await database('usuario').insert(usuario);
            return { message: "Usuario criada com sucesso" };
        } catch (error) {
            throw new Error("Erro ao inserir usuario no banco de dados")
        }
    }

    async listarUsuario() {
        try {
            const imagens = await database('usuario').select("*");
            return { imagens }
        } catch (error) {
            throw new Error("Erro ao listar as imagens");
        }
    }

    async buscarUsuario(id) {
        try {
            const usuario = await database('usuario').select("*").where({id:id});
            return { usuario }
        } catch (error) {
            throw new Error("Usuário inexistente");
        }
    }
    async atualizarUsuario(id, dados) {
        try {
            const resultado = await database('usuario')
                .where({ id })
                .update(dados);
    
            if (resultado === 0) {
                throw new Error("Usuario não encontrada");
            }
    
            return { message: "Usuario atualizada com sucesso" };
        } catch (error) {
            throw new Error("Erro ao atualizar a usuario");
        }
    }

    async removerUsuario(id) {
        try {
            const resultado = await database('usuario')
                .where({ id })
                .del();
    
            if (resultado === 0) {
                throw new Error("Usuario não encontrada");
            }
    
            return { message: "Usuario deletada com sucesso" };
        } catch (error) {
            throw new Error("Erro ao deletar a usuario");
        }
    }

}

module.exports = new UsuarioRepository();