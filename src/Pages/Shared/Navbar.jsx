import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../../Provider/AuthProvidr";
import { Toaster, toast } from "sonner";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/mybookings">My Bookings</NavLink>
      </li>
      <li>
        <NavLink to="/aboutUs">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contact Us</NavLink>
      </li>
    </>
  );
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        toast.success("Log Out Successful!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="my-8  mx-auto   bg-gray-100 hero-overlay bg-opacity-50 ">
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
              {user ? (
                <>
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img alt="User Image" src={user.photoURL} />
                    </div>
                  </div>
                  <div className="pl-2">
                    <p>{user.displayName}</p>
                  </div>
                </>
              ) : (
                <></>
              )}
              <Toaster position="top-right"></Toaster>
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="btn btn-outline text-xl font-semibold "
                >
                  LogOut
                </button>
              ) : (
                <Link to="/login">
                  <button className="btn btn-outline text-xl font-semibold">
                    Login
                  </button>
                </Link>
              )}
            </ul>
          </div>
          <div>
            <div className="max-w-40">
              <img
                src="https://i.ibb.co/2dpMy0S/black-4x.png"
                className="pl-2 w-full"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        <div className="navbar-end hidden lg:flex ">
          {user ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Image" src={user.photoURL} />
                </div>
              </div>
              <div className="pl-2">
                <p>{user.displayName}</p>
              </div>
            </>
          ) : (
            <></>
          )}
          <div className="pl-3">
            <Toaster position="top-right"></Toaster>
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-outline text-xl font-semibold "
              >
                LogOut
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline text-xl font-semibold">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
