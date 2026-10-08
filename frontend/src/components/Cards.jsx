const Cards = () => {
  return (
    <div className="flex flex-col gap-5 w-full items-start justify-start border px-10 py-5 overflow-auto">
      <div className="flex flex-col  w-full   sm:w-[60%] items-start justify-evenly sm:justify-start  border-2 font-bold  py-3 rounded-2xl">
        <div className=" flex px-2 w-full gap-2  ">
          <input
            type="checkbox"
            className="form-checkbox h-6 w-6 text-blue-500"
          />

          <div className="">Finish React frontend</div>
        </div>

        <div className="px-9 w-full ">Build the task manager frontend </div>
        <div className="px-9 flex gap-2">
          <button >edit</button>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
