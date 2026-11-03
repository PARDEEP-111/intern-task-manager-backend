import api from "../api"
import { useState } from "react"
import { useEffect } from "react"
import Navbar from "../components/navbar"
import AddTask from "../components/AddTask"
import CardsTab from "../components/CardsTab"
import TaskModal from '../components/TaskModal'
const Dashboard = () => {
  const [error, seterror] = useState("")
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null);


  const openAdd = () => {
    setEditingTask(null)
    setModalOpen(true)

  }
  const openEdit = (task) => {
    setEditingTask(task)
    setModalOpen(true)

  }
  const closeModal = () => {
    setModalOpen(false)
    setEditingTask(null)
  }

  const updateTask = async (data) => {
    const res = await api.patch(`/tasks/${editingTask._id}`, data)
    setTasks((prev) =>
      prev.map((t) => (t._id === editingTask._id ? res.data : t))
    )
  }
  const handleSubmit = async (data) => {
    if (editingTask) {
      await updateTask(data)
    } else {
      await addTask(data)
    }
  }

  useEffect(() => {
    const loadTask = async () => {

      try {
        const res = await api.get("/tasks")
        setTasks(res.data)
      } catch (err) {
        seterror("coudn't load task....")
      } finally {
        setLoading(false)
      }
    }
    loadTask()
  }, [])

  const toggleTask = async (id) => {
    const task = tasks.find((t) => t._id === id);
    if (!task) return;

    try {
      const res = await api.patch(`/tasks/${id}`, { completed: !task.completed });
      setTasks((prev) => prev.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      console.log("Couldn't update the task");
    }
  };
  const addTask = async (newTask) => {
    const res = await api.post("/tasks", {
      title: newTask.title,
      description: newTask.description
    });
    setTasks((prev) => [res.data, ...prev]);

  };
  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`)
      setTasks((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.log("coudn't load error", err);


    }

  }
  return (
    <div>
      <Navbar />

      <AddTask onOpen={openAdd} />
      {loading ? (
        <p className="px-10">Loading your tasks...</p>
      ) : error ? (
        <p className="px-10 text-red-600">{error}</p>
      ) : (
        <CardsTab tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={openEdit}></CardsTab>
      )}

      <TaskModal
        open={modalOpen}
        onClose={closeModal}
        onSubmit={handleSubmit}
        task={editingTask}
      />
    </div>
  )
}

export default Dashboard;