import { useState } from "react";
import { FaArrowDown, FaEye, FaEyeSlash, FaGithub, FaGoogle, FaMousePointer } from "react-icons/fa";
import { Link , useNavigate } from "react-router-dom";
import { useAuth } from "../contextApis/authContext";

export default function Signin() {
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [name , setName] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setIsLoading] = useState(false);
  const {register , email , setEmail} = useAuth()
  const navigate = useNavigate()

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email format";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await register({name , email , password})
    }
    catch(error) {
      console.log('Erron in signin' , error)
    }
    finally{
      setIsLoading(false)
      navigate('/verify')
      console.log("Signin attempted");
    }
  };

  return (
    <div className="h-screen grid grid-cols-2 max-[1090px]:flex">
      {/* Signin Form */}
      <div className="w-full bg-neutral-950 rounded-2xl flex flex-col items-center px-3 relative">
        <div className="top-0 w-full flex justify-between pt-10 p-6 absolute">
          <div className="flex">
            <img className="w-[35px] h-max" src="svg/logo.svg" alt="AUTOAI Logo" />
            <div className="font-bold text-transparent text-2xl default-gradient">AUTOAI</div>
          </div>

          <button
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900/80 border border-neutral-800 text-white hover:bg-neutral-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Select language"
          >
            <span className="text-sm">English</span>
            <FaArrowDown className="text-xs" />
          </button>
        </div>

        <div className="h-full flex flex-col gap-2 w-[450px] min-w-[300px] justify-center text-white select-none max-[768px]:w-full max-[768px]:px-3">
          <div className="text-center">
            <div className="text-3xl font-bold">Welcome</div>
            <div className="pt-3 text-sm text-neutral-500 mb-6">
              Signin to manage your AI-powered blogs.
            </div>
          </div>

          <div className="bg-blue-500 border border-neutral-800 h-12 flex items-center justify-center gap-3 rounded-md cursor-pointer transition hover:bg-blue-600 shadow px-6">
            <FaGoogle className="h-6 w-6" />
            <div className="font-medium text-sm h-max flex">Sign in with Google</div>
          </div>
          <div className="mt-1 bg-neutral-900 border border-neutral-800 h-12 flex items-center justify-center gap-3 rounded-md cursor-pointer transition hover:bg-neutral-700 shadow px-6">
            <FaGithub className="h-6 w-6" />
            <div className="font-medium text-sm h-max flex items-center">Sign in with Github</div>
          </div>

          <div className="flex items-center w-full my-3">
            <hr className="flex-1 border-neutral-700" />
            <span className="mx-4 text-neutral-500">or</span>
            <hr className="flex-1 border-neutral-700" />
          </div>

          <form className="flex flex-col" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col gap-2">
              <div className="block text-sm font-medium text-neutral-300">Name</div>
              <input
                value={name}
                type="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={`placeholder-neutral-700 bg-transparent border h-[50px] rounded-md px-3 ${
                  errors.name ? "border-red-500" : "border-neutral-800"
                }`}
              />
              {errors.name && (
                <p id="name-error" className="text-sm text-red-400" role="alert">
                  {errors.name}
                </p>
              )}
            </div>
            
            {/* Email */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="block text-sm font-medium text-neutral-300">Email</div>
              <input
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className={`placeholder-neutral-700 bg-transparent border h-[50px] rounded-md px-3 ${
                  errors.email ? "border-red-500" : "border-neutral-800"
                }`}
              />
              {errors.email && (
                <p id="email-error" className="text-sm text-red-400" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 pt-2">
              <div className="flex justify-between items-center">
                <div className="block text-sm font-medium text-neutral-300">Password</div>
                <div className="text-sm text-blue-400 cursor-pointer duration-200 hover:underline hover:text-blue-500">
                  Forgot password?
                </div>
              </div>
              <div className="w-full relative">
                <input
                  type={visible ? "password" : "text"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Your password"
                  className={`w-full placeholder-neutral-700 bg-transparent border h-[50px] rounded-md p-1 px-3 ${
                    errors.password ? "border-red-500" : "border-neutral-800"
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setVisible((v) => !v)}
                  className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded p-1"
                  aria-label={visible ? "Hide password" : "Show password"}
                >
                  {visible ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                </button>
                {errors.password && (
                  <p className="text-sm pt-2 text-red-400" role="alert">
                    {errors.password}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="font-medium text-white hover:scale-105 transition-all bg-gradient-to-r from-blue-700 to-purple-700 mt-6 border border-neutral-800 cursor-pointer flex h-[50px] bg-neutral-900 justify-center items-center rounded-md hover:opacity-70"
            >
              {loading ? "Logging in..." : "Signin"}
            </button>
          </form>

          <div className="text-sm w-full justify-center flex pt-2 font-medium text-neutral-500">
            Have an account?
            <Link className="px-1 text-blue-400 underline" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Robot, Tagline, Pointer, Join Now */}
      <div className="bg-black flex justify-center overflow-hidden select-none max-[1090px]:hidden relative">
        <img className="mt-24" draggable={false} src="svg/robot.svg" alt="AI Robot" />

        <div className="absolute top-16 pl-12 text-3xl text-center text-white font-medium group">
          <div className="bg-gradient-to-t from-neutral-700 via-white to-white text-transparent bg-clip-text">
            Your Creative Partner
          </div>
          <div className="bg-gradient-to-t from-neutral-800  to-neutral-400 text-transparent bg-clip-text">
            in the Age of AI.
          </div>
        </div>

        <div className="relative">
          <FaMousePointer className="absolute top-36 right-[100px] h-[30px] w-[30px] -rotate-12 text-white" />
          <div className="absolute text-white w-max p-1 rounded top-44 right-8 bg-blue-500 ">
            Join now
          </div>
        </div>
      </div>
    </div>
  );
}
