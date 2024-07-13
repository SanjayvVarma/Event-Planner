import Message from "../models/messageSchema.js";

const sendMessage = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;
        if (!name || !email || !phone || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fileds are required"
            })
        }
        await Message.create({ name, email, phone, subject, message });

        res.status(200).json({
            success: true,
            message: "Message Sent Successfully",
        })
    } catch (error) {

        if (error.name === "ValidationError") {
            let errorMessage = "";
            if (error.errors.name) {
                errorMessage += error.errors.name.message + " "

            }
            if (error.errors.email) {
                errorMessage += error.errors.email.message + " "

            }
            if (error.errors.phone) {
                errorMessage += error.errors.phone.message + " "

            }
            if (error.errors.subject) {
                errorMessage += error.errors.subject.message + " "

            }
            if (error.errors.message) {
                errorMessage += error.errors.message.message + " "

            }

            return res.status(400).json({
                success: false,
                message: errorMessage,
            })
        }

    }
};

export default sendMessage;