import Product from '../models/Product.js'


export const createProduct = async (req, res) => {
    const { name, category, price, imgURL } = req.body

    const newProduct = new Product({ name, category, price, imgURL })
    const ProductSaved = await newProduct.save() // cuando s eguarda este devuelve el objeto nuevo con el id de mongo

    res.status(201).json(ProductSaved)

}

export const getProduct = async (req, res) => {
    const products = await Product.find() // trae todos los productos
    res.json(products)
}

export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productId)
    res.status(200).json(product)
}

export const updateProductById = async (req, res) => {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true // con esto devuelve los datos actualizaos en updatedProduct
    })
    res.status(204).json(updatedProduct)
}

export const deleteProductById = async (req, res) => {
    const deleteProduct = await Product.findByIdAndDelete(req.params.productId)
    res.status(204).json()
}