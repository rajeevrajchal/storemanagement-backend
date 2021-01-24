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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User
    },
}, {timestamps: true});

const Store = mongoose.model('stores', storeSchema)
export default Store
