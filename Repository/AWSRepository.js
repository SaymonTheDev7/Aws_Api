const AWS = require('aws-sdk');
const Database = require('../Database/Connection');
const Imagem = require('../Model/Imagem');
const UsuarioRepository = require('../Repository/UsuarioRepository');

AWS.config.update({
    region: 'us-east-1',
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

    async uploadImagem(file, id, referencia) {
        try {
            const params = {
                Bucket: 'bucketmi74',
                Key: referencia,
                Body: file.buffer,
                ContentType: file.mimetype
            };

            const userTest = await UsuarioRepository.buscarUsuario(id);

            const resultado = await s3.upload(params).promise();

            const imagem = new Imagem(file.originalname, id);

            await Database('imagem').insert({
                referencia: referencia,
                usuario_id: imagem.usuario_id,
                data_criacao: imagem.data_criacao
            });

            const response = await this.buscarImagem(referencia);
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
