import { model, models, Schema } from "mongoose";


const userSchema = new Schema({
    clerkID: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    userName: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    photo: {type: String, required: true}
})

const User = model('User', userSchema) || models.User;

export default User;