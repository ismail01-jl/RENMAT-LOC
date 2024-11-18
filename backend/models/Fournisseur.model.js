import mongoose from 'mongoose';

const FournisseurSchema = new mongoose.Schema({
    code_fournisseur: {
        type: String,
        required: true,
        unique: true,
    },
    nom: {
        type: String,
        required: true,
        //unique: true,
    },

    prenom: {
        type: String,
        required: true,
        //unique: true,
    },
    adresse: {
        type: String,
        required: true,
    },
    Telephone: {
        type: Number,
        required: true,
    },

    FAX: {
        type: String,
        required: true,
    },
    adresse_electronique: {
        type: String,
        required: true,
        unique: true,
    },

    imageUrl: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
}, { timestamps: true });
const Fournisseur = mongoose.model('Fournisseur', FournisseurSchema);
export default Fournisseur;
