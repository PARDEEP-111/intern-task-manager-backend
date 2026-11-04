import api from "../api"
import { useState } from "react";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, seterror] = useState("")
  const [username, setUsername] = useState("")
  const [password, setpassword] = useState("")
  const [loading, setloading] = useState(false)
const [confirmPassword, setConfirmPassword] = useState("")
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
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">

      {/* Registration form section */}
      <nav className="w-full border-b border-secondary bg-surface px-4 sm:px-12 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src="/favicon.svg" alt="Logo" className="h-10 w-auto object-contain"/>
          <div className="text-xl font-bold text-heading">Task Manager</div>
        </div>
        <Link
          to="/login"
          className="border border-primary text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-lg transition-colors"
        >
          Login
        </Link>
      </nav>
      <main className="flex-1 flex flex-col items-center justify-center gap-2 px-4 py-8">

        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-evenly border  shadow-secondary shadow-2xl border-heading  bg-surface rounded-xl py-6 w-full max-w-80 gap-5"
        >
          <input
            type="text"
            className="border border-secondary w-[90%] rounded-lg py-3 px-2"
            placeholder="Create your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            className="border border-secondary w-[90%] rounded-lg py-3 px-2"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <input
            type="password"
            className="border border-secondary w-[90%] rounded-lg py-3 px-2"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <p className="text-sm text-danger w-[90%]">
            {error}
          </p>

          <button
            className="border w-[90%] rounded-lg py-2 transition-colors border-primary text-primary hover:bg-primary hover:text-white cursor-pointer disabled:opacity-50"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating..." : "Register"}
          </button>
        </form>

        <Link
          to="/Login"
          className="text-primary hover:underline cursor-pointer"
        >
          Already have an account?
        </Link>

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Register;