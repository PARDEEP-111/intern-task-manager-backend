import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api"
import Footer from "../components/Footer";

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
    <div className="min-h-screen flex flex-col bg-surface">

      {/* Login section */}

      <nav className="w-full border-b border-secondary bg-surface px-4 sm:px-12 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="../../public/favicon.svg" alt="Logo" className="h-9" />
          <div className="text-xl font-bold text-heading">Task Manager</div>
        </div>
        <Link
          to="/register"
          className="border border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-lg transition-colors"
        >
          Register
        </Link>
      </nav>
      <main className="flex-1 flex flex-col justify-center items-center gap-2 px-4 py-8">

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-evenly border shadow-secondary shadow-2xl border-heading bg-surface rounded-xl pt-8  pb-4 w-80 gap-3"
        >

          <input
            type="text"
            className="border border-secondary w-[90%] rounded-lg py-3 px-2"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="border border-secondary w-[90%] rounded-lg py-3 px-2"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="text-sm text-danger w-[90%]">
            {error}
          </p>

          <div className="flex w-full items-center justify-center m-2 p-2 gap-2">

            <Link
              to="/Register"
              className="border w-[50%] font-semibold flex items-center justify-center border-white text-white bg-primary  px-5 py-2 rounded-lg transition-colors hover:bg-white hover:text-primary hover:border-primary"
            >
              Register
            </Link>

            <button
              className="font-bold w-[50%] border border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-lg transition-colors"
              type="submit"
            >
              Login
            </button>

          </div>

        </form>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Login;
