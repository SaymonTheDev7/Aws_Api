const AWSService = require('../Service/AWSService');
const path = require('path');
const fs = require('fs');

class AWSController {
    async buscarImagem(req, res) {
        try {
            const { referencia } = req.params;
            const response = await AWSService.buscarImagem(referencia);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }

    async uploadImagem(req, res) {
        try {
            const { file } = req;
            const { id } = req.params;

            const response = await AWSService.uploadImagem(file, id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ erro: error.message });
        }
    }

    async downloadImagem(req, res) {
        try {
            const { referencia } = req.params;
            const filePath = await AWSService.downloadImagem(referencia);
            res.status(200).json({ mensagem: 'Imagem baixda com sucesso', caminho: filePath });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new AWSController();
