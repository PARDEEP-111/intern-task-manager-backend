const AddTask = () => {
  return (
    <div className=" absolute top-20 items-center flex flex-col w-screen">
      <div className="flex flex-col gap-5  w-full items-start ">
        <div className="w-full items-start px-10 flex flex-col gap-2">
          <div className="text-xl font-bold sm:text-3xl">My Task</div>
          <div className="text-sm text-gray-500 sm:text-xl">
            Manage your tasks and stay organized.
          </div>
        </div>
        <input
          type="text"
          placeholder=" + Add Task"
          className="border-dashed border-2 rounded-sm mx-10 px-3 py-2 w-[80%]  text-xl hover:border-amber-500 focus:outline-none focus:border-amber-500 sm:text-xl cursor-pointer"
        ></input>
      </div>
    </div>
  );
};

export default AddTask;
