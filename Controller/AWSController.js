const AWSService = require('../Service/AWSService');
const path = require('path');
const fs = require('fs');

class AWSController {
    async buscarImagem(req, res) {
        try {
            const { referencia } = req.body;
            if (!referencia) {
                return res.status(400).json({ error: "A referência da imagem é obrigatória." });
            }
            const resultado = await AWSService.buscarImagem(referencia);
            res.json(resultado);
        } catch (error) {
            res.status(400).json({ error: error.message });
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
            const { referencia } = req.body;
            if (!referencia) {
                return res.status(400).json({ error: "A referência da imagem é obrigatória." });
            }

            const filePath = await AWSService.downloadImagem(referencia);

            res.download(filePath, (err) => {
                if (err) {
                    console.error("Erro ao enviar o arquivo:", err);
                    res.status(500).json({ error: "Erro ao enviar o arquivo." });
                }

                console.log(`Arquivo salvo em: ${filePath}`);
            });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new AWSController();
