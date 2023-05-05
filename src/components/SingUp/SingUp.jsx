import React, { useContext, useState } from "react";
import "./SingUp.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SingUp.css";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import SecondNavBar from "../Sheard/SecondNavBar/SecondNavBar";
const SingUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate("");
  let location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const handelSingUp = (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (!/(?=.*[A-Z])/.test(password)) {
      setError(
        toast.error("Please add at least Two Uppercase Letter", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (!/(?=.*[!@#$&*])/.test(password)) {
      setError(
        toast.error("Please Add a Special Character.", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError(
        toast.error("Please add atLeast two number", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
      setError(
        toast.error("Please add atLeast three lowercase letters", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    } else if (password.length < 6) {
      setError(
        toast.error("Please add At least 6 Characters In your Password", {
          position: toast.POSITION.TOP_RIGHT,
        })
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setSuccess(
          toast.success("SuccessFully Create Account", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
        console.log(loggedUser);
        updateUserData(result.user, name, photo);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const updateUserData = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setSuccess(
          toast.success("User Photo Updated", {
            position: toast.POSITION.TOP_RIGHT,
          })
        );
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <SecondNavBar />
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
            Sing Up
          </h1>
          <form onSubmit={handelSingUp} className="mt-6">
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Name"
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2 password-filed">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {passwordShown ? (
                <EyeSlashIcon
                  onClick={togglePassword}
                  className="eye text-blue-500"
                />
              ) : (
                <EyeIcon
                  onClick={togglePassword}
                  className="eye text-blue-500"
                />
              )}
            </div>
            <div className="mb-2 password-filed">
              <label
                htmlFor="photo"
                className="block text-sm font-semibold text-gray-800"
              >
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
                required
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-800"
              >
                {
                  <>
                    Accept <Link to="/terms"> Terms and Conditions</Link>
                  </>
                }
              </label>
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Sing Up
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            Already have an account?
            <Link
              to="/login"
              className="font-medium text-purple-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SingUp;
