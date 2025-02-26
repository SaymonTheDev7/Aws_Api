const UsuarioRepository = require('../Repository/UsuarioRepository');
const Usuario = require('../Model/Usuario');

class UsuarioService {
    async criarNovaUsuario(nome) {
        const novaUsuario = new Usuario(nome);
        return await UsuarioRepository.criarUsuario(novaUsuario);
    }

    async listarUsuario() {
        return await UsuarioRepository.listarUsuario();
    }

    async buscarUsuario(id) {
        return await UsuarioRepository.buscarUsuario(id);
    }

    async atualizarUsuario(id, nome) {
        const dadosAtualizados = { nome };
        return await UsuarioRepository.atualizarUsuario(id, dadosAtualizados);
    }

}

module.exports = new UsuarioService();
