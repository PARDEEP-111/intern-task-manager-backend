import AddTask from "./AddTask"
import CardsTab from "./components/CardsTab"
import Navbar from "./components/navbar"

const App = () => {
  return (
    <div>
     <Navbar/>
     <AddTask/>
     <CardsTab></CardsTab>
    </div>
  )
}

export default App
