import mongoose from 'mongoose';

const ContratSchema = new mongoose.Schema({
    NumeroContrat: {
        type: Number,
        required: true,
        unique: true,
    },

    IdClient: {
        type: String,
        required: true,
        //unique: true,
    },
    Date: {
        type: Date,
        required: true,
        //unique: true,
    },

    nomClient: {
        type: String,
        required: true,
        //unique: true,
    },

    CodeDepot: {
        type: String,
        required: true,
        //unique: true,
    },

    IdMateriel: {
        type: String,
        required: true,
        //unique: true,
    },

    NbJourLoc: {
        type: Number,
        required: true,
        //unique: true,
    },

    MontantLoc: {
        type: Number,
        required: true,
        //unique: true,
    },


}, { timestamps: true });
const Contrat = mongoose.model('Contrat', ContratSchema);
export default Contrat;
