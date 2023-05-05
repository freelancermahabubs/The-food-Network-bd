import React, { useContext, useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { SiIfood } from "react-icons/si";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const SecondNavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOPen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-12 lg:px-8">
      <div className="flex items-center justify-between ">
        <Link to="/" className="inline-flex items-center">
          <SiIfood className="h-8 w-6 text-black" />
          <span className="ml-2 text-xl font-bold tracking-wide text-black">
            The Food Network BD
          </span>
        </Link>

        {/* nave Link  */}
        <ul className="items-center hidden space-x-8 lg:flex text-2xl font-bold">
          <li>
            <NavLink
              to="/"
              title="Home Link"
              className={({ isActive }) => (isActive ? "actives" : "defaults")}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blog"
              title="Blog Link"
              className={({ isActive }) => (isActive ? "actives" : "defaults")}
            >
              Blog
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              title="About Link"
              className={({ isActive }) => (isActive ? "actives" : "defaults")}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? "actives" : "defaults")}
            >
              <span className="flex items-center">
                {user ? (
                  <img
                    title={user?.displayName}
                    className="rounded-full w-14"
                    src={user?.photoURL}
                  />
                ) : (
                  "Login"
                )}
                {user && (
                  <small>
                    <button
                      className="ml-2 bg-red-600 text-white  rounded px-3 py-1"
                      onClick={handleLogOut}
                    >
                      Log Out
                    </button>
                  </small>
                )}
              </span>
            </NavLink>
          </li>
        </ul>
        {/* Mobile Navbar section  */}
        <div className="lg:hidden">
          <button
            aria-level="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOPen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-black" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-red-400 border rounded shadow-sm">
                <div className="flex items-center justify-between ">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <SiIfood className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-white">
                        The Food Network BD
                      </span>
                    </Link>
                  </div>

                  <div>
                    <button
                      aria-level="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOPen(false)}
                    >
                      <XMarkIcon className="w-5 text-black" />
                    </button>
                  </div>
                </div>

                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink to="/" title="Home Link" className="defaults">
                        Home
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/blog"
                        title="Blog Link"
                        className={({ isActive }) =>
                          isActive ? "actives" : "defaults"
                        }
                      >
                        Blog
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/about"
                        title="About Link"
                        className={({ isActive }) =>
                          isActive ? "actives" : "defaults"
                        }
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        className={({ isActive }) =>
                          isActive ? "actives" : "defaults"
                        }
                      >
                        <span className="flex items-center">
                          {user ? (
                            <img
                              title={user?.displayName}
                              className="rounded-full w-14"
                              src={user?.photoURL}
                            />
                          ) : (
                            "Login"
                          )}
                          {user && (
                            <small>
                              <button
                                className="ml-2 bg-red-600 text-white  rounded px-3 py-1"
                                onClick={handleLogOut}
                              >
                                Log Out
                              </button>
                            </small>
                          )}
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default SecondNavBar;
