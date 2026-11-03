import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const Name = localStorage.getItem("username")
  const navigate = useNavigate()
  const hangleLogout = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("token")
    navigate("/login")
  }

  return (

    <div className=" w-screen   border-b  bg-surface h-15 flex justify-between items-center px-10 sm:px-20 py-2">
      <div className="text-xl font-bold text-heading">Task Manager</div>
      <div

        className="sm:flex gap-5 items-center hidden "
      >
        <div className="text-lg font-semibold">{Name}</div>
        <div>
          <button onClick={hangleLogout} className="bg-white border border-primary transition-colors hover:bg-primary hover:text-white text-primary py-2 px-4 rounded cursor-pointer font-bold" >Logout</button>
        </div>
      </div>
      <button
        className="sm:hidden text-2xl "
        onClick={() => setOpen(!open)}
        aria-label="Open Menu"
        aria-expanded={open}
      >
        ☰
      </button>
      {open && (
        <div className="sm:hidden absolute right-5 top-14 z-10 w-44 bg-primary text-white font-bold border border-slate-200 rounded-2xl p-2">

          <button className="block w-full text-left px-3 py-2">{Name}</button>
          <button onClick={hangleLogout} className="block w-full text-left px-3 py-2">Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
