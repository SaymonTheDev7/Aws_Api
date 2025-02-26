const express = require('express')
const router = express.Router()
const Connection = require('../Database/Connection')
const AWSController = require('../Controller/AWSController')
const ImageControllerNova = require('../Controller/ImageController')
const UserControllerNova = require('../Controller/UsuarioController')

const multer = require('multer');
const upload = multer();

router.post('/novaImagem', ImageControllerNova.novaImagem)
router.get('/imagens', ImageControllerNova.listarImagem)
router.get('imagem/:id', ImageControllerNova.buscarImagem)
router.put('/editarImagem/:id', ImageControllerNova.atualizarImagem)
router.delete('/apagarImagem/:id', ImageControllerNova.removerImagem);

router.post('/novoUsuario', UserControllerNova.novaUsuario)
router.get('/usuarios', UserControllerNova.listarUsuario)
router.get('/usuario/:id', UserControllerNova.buscarUsuario)
router.put('/editarUsuario/:id', UserControllerNova.atualizarUsuario)
router.delete('/apagarUsuario/:id', UserControllerNova.removerUsuario);

router.get('/aws', AWSController.buscarImagem)
router.post('/upload', upload.single('file'), AWSController.uploadImagem);
router.get('/download', AWSController.downloadImagem);


module.exports = router