import { Router } from 'express';
import userModel from '#Schemas/user.schema.js';
const userRouter = Router();
userRouter.post("/", async (req, res) => {
    const createdProduct = await userModel.create(req.body)
    res.status(201).send(createdProduct)
})
userRouter.get("/", async (req, res) => {
    const Products = await userModel.find({})
    res.status(200).send(Products)
});
userRouter.patch("/:id", async (req, res) => {
    const UpdateProducts = await userModel.findOneAndUpdate({ _id: req.params.id}, req.body, {
        new: true
    })
    res.status(200).send(UpdateProducts)
});
userRouter.get("/:id", async (req, res) => {
    const Product = await userModel.findOne({ _id: req.params.id });
    res.status(200).send(Product)
});

userRouter.delete("/:id", async (req, res) => {
    const deleteProduct = await userModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).send(deleteProduct);
});
export default userRouter;
