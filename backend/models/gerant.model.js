import mongoose from 'mongoose';

const GerantSchema = new mongoose.Schema({
    ResponsableID: {
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
const Gerant = mongoose.model('Gerant', GerantSchema);
export default Gerant;