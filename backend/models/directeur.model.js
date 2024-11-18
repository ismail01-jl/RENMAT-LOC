import mongoose from 'mongoose';

const DirecteurSchema = new mongoose.Schema({
    DirecteurID: {
        type: String,
        required: true,
        unique: true,
    },
    nomDirect: {
        type: String,
        required: true,
        //unique: true,
    },

    prenomDirect: {
        type: String,
        required: true,
        //unique: true,
    },

    Telephone: {
        type: Number,
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
const Directeur = mongoose.model('Directeur', DirecteurSchema);
export default Directeur;