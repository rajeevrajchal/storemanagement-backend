import mongoose, {Schema} from "mongoose"
import User from "./User";

const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    stock: {
        type: Number,
        required: true
    },
    sale_quantity: {
        type: Number,
        required: false
    },
    wholesale_price: {
        type: Number,
        required: true
    },
    mark_price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    delete_flag: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User
    },
}, {timestamps: true});

const Store = mongoose.model('stores', storeSchema)
export default Store
