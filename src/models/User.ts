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

/**
 * @swagger
 *  components:
 *    schemas:
 *      User:
 *        type: object
 *        required:
 *          - first_name
 *          - last_name
 *          - contact_no
 *          - address
 *          - role
 *          - password
 *          - email
 *        properties:
 *          first_name:
 *            type: string
 *          middle_name:
 *            type: string
 *          last_name:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *            description: Email for the user, needs to be unique.
 *          password:
 *            type: string
 *            format: password
 *            description: Your Login Password
 *          contact_no:
 *            type: number
 *            description: Your Number
 *          address:
 *            type: string
 *            description: Your Address
 *          role:
 *            type: string
 *            description: Your Role
 *        example:
 *           first_name: jhon 
 *           last_name: doe
 *           email: doejhon@gmail.com
 *           password: 12345678
 *           contact_no: 987502345
 *           address: Nepal
 */
