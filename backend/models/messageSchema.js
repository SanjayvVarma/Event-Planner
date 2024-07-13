import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required"],
        minLength: [3, "name must cantain at least 3 characters"]
    },

    email: {
        type: String,
        required: [true, "Email Required"],
        validate: [validator.isEmail, "please provide valid email"]
    },

    phone: {
        type: String,
        required: [true, "Phone number Required"],
        minLength: [10, "phone number must cantain at least minmum 10 number"],
        maxLength: [11, "phone number must cantain at least maximum 11 number"]
    },

    subject: {
        type: String,
        required: [true, "Subject Required"],
        minLength: [5, "Subject must cantain at least 5 characters"]
    },

    message: {
        type: String,
        required: [true, "Message Required"],
        minLength: [10, "Message must cantain at least 10 characters"]
    },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;