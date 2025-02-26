const AWSRepository = require('../Repository/AWSRepository');
const path = require('path');
const fs = require('fs');

class AWSService {
    async buscarImagem(referencia) {
        return await AWSRepository.buscarImagem(referencia);
    }

    async uploadImagem(file) {
        return await AWSRepository.uploadImagem(file);
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
