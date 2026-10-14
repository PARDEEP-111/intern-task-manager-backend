import { useState } from "react"
import AddTask from "../components/AddTask"
import CardsTab from "../components/CardsTab"
import Navbar from "../components/navbar"

const Dashboard = () => {
   const [tasks, setTasks] = useState([
    { id: 1, title: "Finish React frontend", description: "Build the task manager frontend", status: "active" },
  ]);

  const toggleTask = (id) => {
  setTasks(
    tasks.map((t) =>
      t.id === id
        ? {...t, status: t.status === "active" ? "completed" : "active" }
        : t
    )
  );
};
 const addTask = (newTask) => setTasks([newTask, ...tasks]);
  return (
    <div>
     <Navbar/>
     <AddTask onAdd={addTask}/>
     <CardsTab tasks={tasks} onToggle={toggleTask}></CardsTab>

  
    </div>
  )
}

export default Dashboard;