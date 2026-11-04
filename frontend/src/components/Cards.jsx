const Cards = (props) => {
  return (
    <div className="flex flex-col gap-4 w-full items-start border-t border-border px-5 sm:px-10 py-5">

      {props.tasks.map((task) => (
        <div
          key={task._id}
          className="flex flex-col gap-3 w-full sm:w-[60%] min-h-[100px] bg-surface border border-secondary rounded-xl p-4 transition-shadow hover:shadow-sm"
        >

          {/* Task title */}
          <div className="flex items-start gap-2">

            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => props.onToggle(task._id)}
              className="mt-0.5 h-5 w-5 shrink-0 accent-primary cursor-pointer"
            />

            <h3
              className={`text-base font-semibold break-words ${
                task.completed
                  ? "line-through text-secondary"
                  : "text-heading"
              }`}
            >
              {task.title}
            </h3>

          </div>

          {/* Description */}
          {task.description && (
            <p className="text-sm text-secondary pl-7 break-words">
              {task.description}
            </p>
          )}

          {/* Buttons */}
          <div className="flex items-center gap-2 pl-7 pt-1">

            <button
              onClick={() => props.onEdit(task)}
              className="border border-primary text-primary hover:bg-primary hover:text-white rounded-md px-3 py-1 text-xs font-semibold transition-colors cursor-pointer"
            >
              Edit
            </button>

            <button
              onClick={() => props.onDelete(task._id)}
              className="border border-danger text-danger hover:bg-danger hover:text-white rounded-md px-3 py-1 text-xs font-semibold transition-colors cursor-pointer"
            >
              Delete
            </button>

          </div>

        </div>
      ))}

    </div>
  );
};

export default Cards;