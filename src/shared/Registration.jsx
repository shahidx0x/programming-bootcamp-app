import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";


const Registration = () => {
  const [phone, setPhone] = useState("");
  return (
    <div className="flex justify-center items-center h-full border-r-8 rounded-xl">
      <div className="flex flex-col p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800 min-w-96 w-5/12 border-b-8 border-l-4 border-t-2 border-r rounded-xl">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign up</h1>
          <p className="text-sm text-gray-600">Sign up to access the app</p>
        </div>
        <form noValidate="" action="" className="space-y-12">
          <div className="grid grid-cols-1 gap-5">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Doe Jon"
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
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
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
              <label htmlFor="email" className="block mb-2 text-sm">
                Contact Information
              </label>
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
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
              <label htmlFor="email" className="block mb-2 text-sm">
                Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
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
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
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
                  Conform Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
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
                Register
              </button>
            </div>
            <p className="px-6 text-sm text-center text-gray-600">
              Have an account yet?
              <Link
                to="/login"
                href="#"
                className="hover:underline text-blue-600"
              >
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
