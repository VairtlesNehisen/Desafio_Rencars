const express = require('express');
const Veiculos = require('../models/modelVeiculo');
const router = express.Router();

// Listar todos os veículos
router.get('/veiculos', async (req, res) => {
    const veiculos = await Veiculos.findAll();
    res.json(veiculos);
});

// Obter um veículo por ID
router.get('/veiculos/:id', async (req, res) => {
    const { id } = req.params;
    const veiculo = await Veiculos.findByPk(id);
    if (veiculo) {
        res.json(veiculo);
    } else {
        res.status(404).json({ error: 'Veículo não encontrado' });
    }
});

// Criar um novo veículo
router.post('/veiculos', async (req, res) => {
    const novoVeiculo = await Veiculos.create(req.body);
    res.json(novoVeiculo);
});

// Atualizar um veículo por ID
router.put('/veiculos/:id', async (req, res) => {
    const { id } = req.params;
    const numAtualizado = await Veiculos.update(req.body, { where: { id } });
    if (numAtualizado > 0) {
        res.json({ message: 'Veículo atualizado com sucesso' });
    } else {
        res.status(404).json({ error: 'Veículo não encontrado' });
    }
});

// Excluir um veículo por ID
router.delete('/veiculos/:id', async (req, res) => {
    const { id } = req.params;
    const numExcluidos = await Veiculos.destroy({ where: { id } });
    if (numExcluidos > 0) {
        res.json({ message: 'Veículo excluído com sucesso' });
    } else {
        res.status(404).json({ error: 'Veículo não encontrado' });
    }
});

module.exports = router;
