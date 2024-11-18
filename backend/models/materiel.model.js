import mongoose from 'mongoose';

const materielSchema = new mongoose.Schema({
    codeMateriel: {
        type: Number,
        required: true,
        unique: true,
    },
    Designation: {
        type: String,
        required: true,
        //unique: true,
    },

    CategoryMat: {
        type: String,
        required: true,
        //unique: true,
    },
    EtatMat: {
        type: String,
        required: true,
    },
    Capacite: {
        type: Number,
        required: true,
    },
    PrixLocation: {
        type: String,
        required: true,
    },
    codeFournisseur: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
}, { timestamps: true });
const Materiel = mongoose.model('Materiel', materielSchema);
export default Materiel;