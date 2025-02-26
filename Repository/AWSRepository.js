const AWS = require('aws-sdk');

AWS.config.update({
    region: '',
    accessKeyId: '',
    secretAccessKey: ''
});

const s3 = new AWS.S3();

class AWSRepository {
    async buscarImagem(referencia) {
        try {
            const params = {
                Bucket: 'bucketmi74',
                Key: referencia
            };

            const url = s3.getSignedUrl('getObject', params);
            return { url };
        } catch (error) {
            throw new Error("Erro ao buscar imagem no S3: " + error.message);
        }
    }

    async uploadImagem(file) {
        try {
            const params = {
                Bucket: 'bucketmi74',
                Key: file.originalname,
                Body: file.buffer,
                ContentType: file.mimetype
            };

            const resultado = await s3.upload(params).promise();
            const response = await this.buscarImagem(file.originalname);
            return { url: response };
        } catch (error) {
            throw new Error("Erro ao fazer upload da imagem no S3: " + error.message);
        }
    }

    async downloadImagem(referencia) {
        try {
            const params = {
                Bucket: 'bucketmi74',
                Key: referencia
            };

            const data = await s3.getObject(params).promise();
            return data.Body;
        } catch (error) {
            throw new Error("Erro ao baixar imagem do S3: " + error.message);
        }
    }
}

module.exports = new AWSRepository();
