import Cards from "./Cards"


const CardsTab = () => {
  return (
    <div className="w-full flex-col flex items-center">
      <div className="flex gap-5 w-full  items-center justify-evenly sm:justify-start px-10 border-b-2 font-bold ">
        <div className="cursor-pointer">All</div>
        <div className="cursor-pointer">Active</div>
        <div className="cursor-pointer">Completed</div>
      </div>
      <Cards></Cards>
    </div>
  )
}

export default CardsTab

