const Cards = (props) => {


  return (
    <div className="flex flex-col gap-5 w-full items-start justify-start border-t px-10 py-5 overflow-auto">
      {
        props.tasks.map((task) => (<div key={task._id} className="flex flex-col  w-full  text-xl sm:w-[60%] items-start justify-evenly sm:justify-start  border-2 font-bold  py-3 rounded-2xl">
          <div className=" flex px-2 w-full gap-2  ">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => props.onToggle(task._id)}
              className="form-checkbox h-6 w-6 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 cursor-pointer"
            />

            <div className={task.completed ? "line-through text-gray-700" : ""}>{task.title}</div>
          </div>

          <div className="px-9 w-full text-sm text-gray-600 ">{task.description}</div>
          <div className="px-9 flex gap-2">
            <button className="border rounded px-3 py-1 cursor-pointer  text-sm ">Edit</button>
            <button onClick={() => props.onDelete(task._id)} className="border rounded px-3 py-1 cursor-pointer text-sm text-red-700">Delete</button>
          </div>
        </div>)

        )}


    </div>
  );
};

export default Cards;
