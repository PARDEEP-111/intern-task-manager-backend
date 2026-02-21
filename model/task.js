const taskSchema = new mongoose.schema({
    title: {
        type: String,
        required: ture,

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
module.exports = mongoose.model("Task",taskSchema)