import { Router } from 'express';
import productModel from '#Schemas/product.schema.js';
const productRouter = Router();
productRouter.post("/", async (req, res) => {
    const createdProduct = await productModel.create(req.body)
    res.status(201).send(createdProduct)
})
productRouter.get("/", async (req, res) => {
    const Products = await productModel.find({})
    res.status(200).send(Products)
});
productRouter.patch("/:id", async (req, res) => {
    const UpdateProducts = await productModel.findOneAndUpdate({ _id: req.params.id}, req.body, {
        new: true
    })
    res.status(200).send(UpdateProducts)
});
productRouter.get("/:id", async (req, res) => {
    const Product = await productModel.findOne({ _id: req.params.id });
    res.status(200).send(Product)
});

productRouter.delete("/:id", async (req, res) => {
    const deleteProduct = await productModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).send(deleteProduct);
});
export default productRouter;
