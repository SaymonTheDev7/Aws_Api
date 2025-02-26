const UsuarioService = require('../Service/UsuarioService');

class UsuarioController {
    async novaUsuario(req, res) {
        try {
            const { nome } = req.body;
            const resultado = await UsuarioService.criarNovaUsuario(nome);
            res.json(resultado);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async listarUsuario(req, res) {
        try {
            const resultado = await UsuarioService.listarUsuario();
            res.json(resultado);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async buscarUsuario(req , res) {
        try {
            const id = req.params
            const resultado = await UsuarioService.buscarUsuario(id);
            res.json(resultado);
        } catch (error) {
            res.status(400).json({ error: error.message})
        }
    }
    
    async atualizarUsuario(req, res) {
        try {
            const { id } = req.params;
            const { nome } = req.body;

            const resultado = await UsuarioService.atualizarUsuario(id, nome);
            res.json(resultado);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async removerUsuario(req, res) {
        try {
            const { id } = req.params;

            const resultado = await UsuarioService.removerUsuario(id);
            res.json(resultado);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}

module.exports = new UsuarioController();
