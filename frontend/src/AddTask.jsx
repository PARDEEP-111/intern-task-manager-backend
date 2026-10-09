import { useState } from "react";

const AddTask = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-5 px-5 sm:px-10 my-10">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-bold sm:text-3xl">My Task</div>
        <div className="text-sm text-gray-500 sm:text-xl">
          Manage your tasks and stay organized.
        </div>
      </div>

      <button
        onClick={() => setOpen(true)}
        className="border-dashed border-2 rounded-sm px-3 py-2 w-full sm:w-[80%] text-xl text-left hover:border-amber-500 focus:outline-none focus-visible:border-amber-500 cursor-pointer"
      >
        + Add Task
      </button>

      {open && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md max-h-[90dvh] overflow-y-auto rounded-2xl border bg-white p-4 sm:p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold">Add new task</div>
              <button
                onClick={() => setOpen(false)}
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
                onChange={(e)=>console.log(e.target.value)

                }
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-semibold">Description</label>
              <textarea
                placeholder="Task description"
                rows={4}
                className="w-full resize-none rounded-xl border p-3 focus:outline-none focus:border-black"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="rounded-lg border px-4 py-2 cursor-pointer"
              >
                Cancel
              </button>
              <button className="rounded-lg bg-black px-4 py-2 text-white cursor-pointer">
                Create Task
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTask;
