import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
      
    currency: {
      type: String,
    },
},
{
    timestamps: true,
});

const productModel = model('productos', productSchema);

export default productModel;
