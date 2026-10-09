import { useState } from "react";
import Cards from "./Cards";

const tasks = [
  {
    id: 1,
    title: "Finish  React frontend",
    description: "Build the task manager frontend",
    status: "active",
  },
  {
    id: 2,
    title: "Finish  React frontend",
    description: "Build the task manager frontend",
    status: "active",
  },
  {
    id: 3,
    title: "Finish  React frontend",
    description: "Build the task manager frontend",
    status: "completed",
  },
];
const CardsTab = () => {
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? tasks : tasks.filter((t) => t.status === filter);
const activeCount = tasks.filter((t) => t.status === "active").length;
const completedCount = tasks.filter((t) => t.status === "completed").length;
  return (
    <div className="w-full flex-col flex items-center">
      <div className="flex gap-5 w-full items-center justify-evenly sm:justify-start px-10  font-bold">
        <div onClick={() => setFilter("all")}   className={`  cursor-pointer ${filter === "all" ? "border-b-4 border-black" : ""}`}>
          All ({tasks.length})
        </div>
        <div onClick={() => setFilter("active")}  className={`  cursor-pointer ${filter === "active" ? "border-b-4 border-black" : ""}`}>
          Active ({activeCount})
        </div>
        <div onClick={() => setFilter("completed")}  className={` cursor-pointer ${filter === "completed" ? "border-b-4 border-black" : ""}`}>
          Completed ({completedCount})
        </div>
      </div>
      <Cards tasks={shown}></Cards>
    </div>
  );
};
export default CardsTab;