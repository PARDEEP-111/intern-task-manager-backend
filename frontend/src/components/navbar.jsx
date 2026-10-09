import { useState } from "react";

const Navbar = () => {
 const [open, setOpen] = useState(false)
  return (
    
    <div className=" w-screen   border-b  bg-amber-200 h-15 flex justify-between items-center px-10 sm:px-20 py-2">
      <div className="text-xl font-bold">Task Manager</div>
      <div
       
        className="sm:flex gap-5 items-center hidden "
      >
        <div className="text-lg font-semibold">Name</div>
        <div>
          <button className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded cursor-pointer font-bold" >Logout</button>
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
        <div className="sm:hidden absolute right-5 top-14 z-10 w-44 bg-amber-400 border border-slate-200 rounded-2xl p-2">
        
          <button className="block w-full text-left px-3 py-2">Name</button>
          <button className="block w-full text-left px-3 py-2">Logout</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
