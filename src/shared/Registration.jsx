import { Link, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import useForm from "@/hooks/useForm";
import toast from "react-hot-toast";
import { useRegisterMutation } from "@/redux/services/AppServices";

const Registration = () => {
  const navigateTo = useNavigate();
  const initialValues = {
    email: "",
    password: "",
    fullName: "",
    address: "",
    confirmPassword: "",
  };
  const { formData, handleChange, handleSubmit } = useForm(initialValues);
  const [register, { isLoading, error }] = useRegisterMutation();
  const [phone, setPhone] = useState("");

  const submitForm = async (data) => {
    const { email, password, fullName, address, confirmPassword } = data;
    const contact = phone;
    if (password !== confirmPassword) return toast.error("password mismatch");
    try {
      toast.promise(register({ email, password, fullName, address, contact }), {
        loading: "Registering...",
        success: () => {
          navigateTo("/login");
          return "Registration successful!";
        },
        error: (err) => {
          console.error("Failed to register:", err || error);
          return "Failed to register. Please try again.";
        },
      });
    } catch (err) {
      console.error("Failed to register:", err || error);
      toast.error("Failed to register. Please try again.", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800 min-w-96 w-5/12 border-b-8 border-l-4 border-t-2 border-r rounded-xl">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm text-gray-600">Sign up to access the app</p>
        </div>
        <form onSubmit={handleSubmit(submitForm)} className="space-y-12">
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label htmlFor="fullName" className="block mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="john.doe@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm">
                Contact Information
              </label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                inputProps={{
                  name: "phone",
                  id: "phone",
                  className:
                    "w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800",
                }}
              />
            </div>
            <div>
              <label htmlFor="address" className="block mb-2 text-sm">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="123 Main St, City, Country"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="********"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="shadow-[0_0_0_3px_#000000_inset] w-full px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 hover:bg-black hover:text-white"
                disabled={isLoading}
              >
                {isLoading ? "Registering..." : "Register"}
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="hover:underline text-blue-600">
                Sign in
              </Link>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
