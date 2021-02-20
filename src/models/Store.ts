import mongoose, {Schema} from "mongoose"
import User from "./User";

const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: true,
    },
    contact_no: {
        type: Number,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
    },
    
}, {timestamps: true});

const Store = mongoose.model('stores', storeSchema)
export default Store
