const AddTask = ({ onOpen }) => {
  return (
    <div className="w-full flex flex-col gap-5 px-5 sm:px-10 my-10">
      <div className="flex flex-col gap-2">
        <div className="text-xl font-bold sm:text-3xl text-heading">My Task</div>
        <div className="text-sm text-secondary sm:text-xl">
          Manage your tasks and stay organized.
        </div>
      </div>

      <button
        onClick={onOpen}
        className="border-dashed border-2 rounded-sm px-3 py-2 w-full sm:w-[80%] text-xl text-left hover:border-primary focus:outline-none focus-visible:border-primary cursor-pointer hover:text-primary font-semibold"
      >
        + Add Task
      </button>
    </div>
  );
};

export default AddTask;