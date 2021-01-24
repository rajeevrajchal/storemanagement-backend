import mongoose, {Schema} from "mongoose"

const userSchema = new Schema({
    first_name: {
        type: Schema.Types.String,
        required: true,
    },
    middle_name: {
        type: Schema.Types.String,
        required: false,
    },
    last_name: {
        type: Schema.Types.String,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: Schema.Types.String,
        required: true
    },
    contact_no: {
        type: Schema.Types.Number,
        required: true,
        unique: true
    },
    address: {
        type: Schema.Types.String,
        required: true,
    },
    role: {
        type: Schema.Types.Number,
        required: true
    }
}, {timestamps: true});

const User = mongoose.model('users', userSchema)
export default User
