import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="min-h-screen  flex  flex-col  justify-center items-center gap-2">
      <form className="flex flex-col items-center justify-evenly border py-6 w-80 gap-5">
        <input
          type="text"
          className="border w-[90%] rounded-lg py-3 px-2"
          placeholder="Create your username"
        ></input>
        <input
          type="password"
          className="border w-[90%] rounded-lg py-3 px-2"
          placeholder="Enter your pasword"
        ></input>
        <input
          type="password"
          className="border w-[90%] rounded-lg py-3 px-2"
          placeholder="Confirm password"
        ></input>

        <button
          className=" border w-[90%] rounded-lg py-2 bg-green-500 hover:bg-green-600 cursor-pointer "
          type="submit"
        >
          register
        </button>
      </form>
      <Link
        to="/Login"
        className="text-blue-500 hover:underline cursor-pointer"
      >
        already have a account
      </Link>
    </div>
  );
};

export default Register;
