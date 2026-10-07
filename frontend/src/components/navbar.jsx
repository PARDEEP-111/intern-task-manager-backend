const Navbar = () => {
  const appear = (e) => {
    console.log(e.target);
    e.target.style.display = "none";
  };
  return (
    <div className=" w-full bg-black text-white  h-15 flex justify-between items-center px-19">
      <div>Task Manager</div>
      <div
        onClick={(e) => {
          appear(e);
        }}
        className="flex gap-5 items-center"
      >
        <div>name4</div>
        <div>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
