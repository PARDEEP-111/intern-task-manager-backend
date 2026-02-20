const mongoose = require("mongoose")

const userschema = new mongoose.schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});
const taskSchema = new mongoose.schema({
    title: {
        type: String,
        retuired: ture,

    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
}, { timestamps: ture });
module.exports = mongoose.model("User", userschema)
module.exports = mongoose.model("Task",taskSchema)