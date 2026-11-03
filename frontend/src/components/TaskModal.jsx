import { useEffect, useState } from "react"

const TaskModal = ({ open, onClose, onSubmit, task }) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [error, setError] = useState("")
    useEffect(() => {
        if (open) {
            setTitle(task ? task.title : "")
            setDescription(task ? task.description : "")
            setError("")
        }
    }, [open, task])


    const handleSubmit = async () => {
        if (!title.trim()) {
            setError("Title is required.");
            return;
        }
        setError("");

        try {
            await onSubmit({ title: title.trim(), description: description.trim() });
            setTitle("");
            setDescription("");
            onClose();
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong.");
        }
    };
    if (!open) return null;
    return (
        <div>

            <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/50 p-4 ">
                <div className="w-full max-w-md max-h-[90dvh] overflow-y-auto rounded-2xl border bg-surface p-4 sm:p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-bold">{task ? "Edit Task" : "Add New Task"}</div>
                        <button
                            onClick={onClose}
                            className="text-xl px-2 cursor-pointer"
                            aria-label="Close"
                        >
                            X
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Title</label>
                        <input
                            type="text"
                            placeholder="Task title"
                            className="w-full rounded-xl border p-3 focus:outline-none focus:border-black"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}

                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">Description</label>
                        <textarea
                            placeholder="Task description"
                            rows={4}
                            className="w-full resize-none rounded-xl border p-3 focus:outline-none focus:border-black"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <p className="text-sm text-red-600 min-h-5">{error}</p>
                    <div className="flex justify-end gap-3">
                        <button
                            onClick={onClose}
                            className="rounded-lg border px-4 py-2 cursor-pointer"
                        >
                            Cancel
                        </button>

                        <button
                            className="rounded-lg bg-black px-4 py-2 text-white cursor-pointer"
                            onClick={handleSubmit}
                        >
                            {task ? "Update Task" : "Add Task"}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );

}
export default TaskModal
