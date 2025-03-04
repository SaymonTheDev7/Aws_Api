const AWSRepository = require('../Repository/AWSRepository');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

class AWSService {
    async buscarImagem(referencia) {
        return await AWSRepository.buscarImagem(referencia);
    }

    async uploadImagem(file, id) {
        const referencia = crypto.randomUUID();
        const url = await AWSRepository.uploadImagem(file, id, referencia);
        return url;
    }

    async downloadImagem(referencia) {
        const fileData = await AWSRepository.downloadImagem(referencia);

        const downloadsPath = path.join(require('os').homedir(), 'Downloads');
        const filePath = path.join(downloadsPath, referencia);

        fs.writeFileSync(filePath, fileData);

        return filePath;
    }
}

module.exports = new AWSService();
