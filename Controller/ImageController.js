const ImagemService = require('../Service/ImagemService');

class ImagemController {
    async novaImagem(req, res) {
        try {
            const { referencia, titulo } = req.body;
            const resultado = await ImagemService.criarNovaImagem(referencia, titulo);
            res.json(resultado);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    //a
    async listarImagem(req, res) {
        try {
            const resultado = await ImagemService.listarImagem();
            res.json(resultado);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async buscarImagem(req , res) {
        try {
            const id = req.params
            const resultado = await ImagemService.buscarImagem(id);
            res.json(resultado);
        } catch (error) {
            res.status(400).json({ error: error.message})
        }
    }
    
    async atualizarImagem(req, res) {
        try {
            const { id } = req.params;
            const { referencia, titulo } = req.body;

            const resultado = await ImagemService.atualizarImagem(id, referencia, titulo);
            res.json(resultado);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async removerImagem(req, res) {
        try {
            const { id } = req.params;

            const resultado = await ImagemService.removerImagem(id);
            res.json(resultado);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

}

module.exports = new ImagemController();
