import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api"

const Login = () => {
  console.log("please login");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim() || !password) {
      setError("enter your password and username");
      return;
    }
    setLoading(true);
    setError("");

    try {
      const res = await api.post("/auth/login", { username: username.trim(), password });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", username.trim());
      navigate("/dashboard");                     // last step: go to the dashboard
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);      // the server answered with an error
      } else {
        setError("Can't reach the server.");      // no answer at all
      }
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="h-screen  flex justify-center items-center gap-2">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-evenly border py-6 w-80 gap-5">
        <input
          type="text"
          className="border w-[90%] rounded-lg py-3 px-2"
          placeholder="enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="password"
          className="border w-[90%] rounded-lg py-3 px-2"
          placeholder="enter your pasword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p className="text-sm text-red-600 w-[90%]">{error}</p>
        <div className="flex w-[100%] items-center justify-center jus gap-2">
          <Link
            to="/Register"
            className=" border w-[50%] rounded-lg py-2   bg-green-500 hover:bg-green-600 cursor-pointer "

          >
            Register
          </Link>

          <button
            className=" border w-[50%] rounded-lg py-2 bg-blue-400 hover:bg-blue-500 cursor-pointer  "
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
