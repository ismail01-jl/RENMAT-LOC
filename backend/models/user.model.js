import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
        unique: true,
    },
    nome: {
        type: String,
        required: true,
        //unique: true,
    },

    prenom: {
        type: String,
        required: true,
        //unique: true,
    },
    Adress: {
        type: String,
        required: true,
    },
    Telephone: {
        type: Number,
        required: true,
    },
    MatriculeFiscal: {
        type: String,
        required: true,
    },
    FAX: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
export default User;