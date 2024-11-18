import mongoose from 'mongoose';

const depotSchema = new mongoose.Schema({
    codeDepot: {
        type: int64,
        required: true,
        unique: true,
    },
    adresse: {
        type: String,
        required: true,
        //unique: true,
    },



    Telephone: {
        type: Number,
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
const Depot = mongoose.model('Depot', depotSchema);
export default Depot;