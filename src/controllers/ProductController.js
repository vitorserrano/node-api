const mongoose = require("mongoose");

const Product = mongoose.model('Product');

module.exports = {
    //Listagem
    async index(req, res) {
        const { page = 1 } = req.query;

        //O await, faz com que o "return res.json só execute, caso o find de certo"
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    //Detalhes
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //Criação
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    //Atualização
    // No Update, é necessário "Juntar o show com o store, para que faça uma busca pelo id e depois, atualize o body"
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
                // O parametro "new: true", serve para que o mongoose passe o produto atualizado para a variável product, se não for feito isso, o produto será atualizado, porém irá ser mostrado antes de atualizar
        });

        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        //Respota de sucesso, sem nenhum conteúdo
        return res.send();
    }
};