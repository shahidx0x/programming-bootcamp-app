import useForm from "@/hooks/useForm";
import { useLoginMutation } from "@/redux/services/AppServices";
import { setUser } from "@/redux/slices/authSlice";
import { setToken } from "@/utils/localstorage";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigateTo = useNavigate();

  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const { formData, handleChange, handleSubmit } = useForm(initialValues);
  const [login, { isLoading, error }] = useLoginMutation();

  const submitForm = async (data) => {
    const email = data.email;
    const password = data.password;

    try {
      if (isLoading) {
        toast.info("Logging in...");
      }
      const response = await login({ email, password }).unwrap();
      setToken(response.token);
      dispatch(setUser(response.user));
      navigateTo("/#home");
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (err) {
      console.error("Failed to login:", err || error);
      toast.error("Failed to login. Please try again.", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col p-6 sm:p-10 bg-gray-50 text-gray-800 min-w-96 w-5/12 border-b-8 border-l-4 border-t-2 border-r rounded-xl">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleSubmit(submitForm)} className="space-y-12">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
              <div
                data-lastpass-icon-root=""
                style={{
                  position: "relative",
                  height: "0px",
                  width: "0px",
                  float: "left",
                }}
              ></div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs hover:underline text-gray-600"
                >
                  Forgot password?
                </a>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
              />
              <div
                data-lastpass-icon-root=""
                style={{
                  position: "relative",
                  height: "0px",
                  width: "0px",
                  float: "left",
                }}
              ></div>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button className="shadow-[0_0_0_3px_#000000_inset] w-full px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-black hover:text-white">
                Login
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Dont have an account yet?
              <Link
                to="/registration"
                rel="noopener noreferrer"
                href="#"
                className="hover:underline text-blue-600"
              >
                Sign up
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
