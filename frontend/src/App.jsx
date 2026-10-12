import AddTask from "./components/AddTask"
import CardsTab from "./components/CardsTab"
import Navbar from "./components/navbar"

const App = () => {
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
  return (
    <div>
     <Navbar/>
     <AddTask/>
     <CardsTab tasks={tasks}></CardsTab>
    </div>
  )
}

export default App
