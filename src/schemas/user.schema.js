import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
    },
    role: {
        type: String,
    },
      
    contact_email: {
      type: String,
    },
},
{
    timestamps: true,
});

const userModel = model('usuarios', userSchema);

export default userModel;
