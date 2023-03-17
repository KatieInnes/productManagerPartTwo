const Product = require("../models/product.model")


module.exports.createProduct = (request, response) => {
    Product.create(request.body) 
    .then(product => response.json(person))
    .catch(err => response.json(err));
    }
    