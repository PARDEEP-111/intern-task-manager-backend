import { Link, useNavigate } from "react-router-dom";
import api from "../api"
import { useState } from "react";

const Register = () => {
  const [error, seterror] = useState("")
  const [username, setUsername] = useState("")
  const [password, setpassword] = useState("")
  const [loading, setloading] = useState(false)
  const [confirmPassword, setConfirmPasswrod] = useState("")
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password || !confirmPassword) {
      seterror("Please enter all the fields.")
      return;
    }
    if (password !== confirmPassword) {
      seterror("passwords does not match.")
      return;

    }
    if (password.length < 6) {
      seterror("Password should atleast be 6 characters.");
      return;
    }
    setloading(true);
    seterror("");

    try {
      await api.post("/auth/register", { username: username.trim(), password });
      navigate("/login")
    } catch (err) {

      if (err.response) {
        seterror(err.response.data.message)
      } else {
        seterror("can't reach the server")
      }
    } finally {
      setloading(false)
    }
  }

  return (
    <div className="min-h-screen  flex  flex-col  justify-center items-center gap-2">
      <form onSubmit={submitHandler} className="flex flex-col items-center justify-evenly border py-6 w-80 gap-5">
        <input
          type="text"
          className="border w-[90%] rounded-lg py-3 px-2"
          placeholder="Create your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}

        ></input>
        <input
          type="password"
          className="border w-[90%] rounded-lg py-3 px-2"
          placeholder="Enter your pasword"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        ></input>
        <input
          type="password"
          className="border w-[90%] rounded-lg py-3 px-2"
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPasswrod(e.target.value)}
        ></input>
<p className="text-sm text-red-600 w-[90%]">{error}</p>
        <button
          className=" border w-[90%] rounded-lg py-2 bg-green-500 hover:bg-green-600 cursor-pointer "
          type="submit"
          disabled={loading}
        >
          {loading ? "creating..." : "Register"}
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
