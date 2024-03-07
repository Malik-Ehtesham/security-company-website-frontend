/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import Logo from "../../utils/images/icons/logo.jpg";
import { useEffect, useState } from "react";

const Navbar = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      className={`flex justify-center fixed w-full z-10  rounded-sm ${
        scrolled ? "bg-sky-700 " : ""
      } `}
    >
      <div className="navbar  px-10 xl:px-20 py-4">
        <div className="navbar-start  lg:ms-10">
          <Link to="/">
            <img
              src={Logo}
              className="w-24 h-24 border-4 border-sky-700 rounded-full"
            />
          </Link>
        </div>
        <div className="navbar-end lg:flex ">
          <ul className="menu menu-horizontal px-1 flex items-center">
            <li className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center mx-1 ">
              <Link
                to="/"
                className={`text-sm xl:text-lg ${
                  props.page === "Home" ? "text-white" : "text-sky-700"
                }  hover:text-yellow-400 font-semibold  p-1.5 xl:p-2 rounded-full  ${
                  scrolled ? "text-slate-100" : ""
                }  `}
              >
                Startseite
              </Link>
            </li>

            <li
              id="navbar"
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  mx-1"
            >
              <Link
                to="/aboutus"
                className={`text-sm xl:text-lg ${
                  props.page === "Home" ? "text-white" : "text-sky-700"
                }  hover:text-yellow-400 font-semibold  p-1.5 xl:p-2 rounded-full  ${
                  scrolled ? "text-slate-100" : ""
                } `}
              >
                Über uns
              </Link>
            </li>
            <li
              id="navbar"
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  mx-1"
            >
              <Link
                to="/services"
                className={`text-sm xl:text-lg ${
                  props.page === "Home" ? "text-white" : "text-sky-700"
                }  hover:text-yellow-400 font-semibold  p-1.5 xl:p-2 rounded-full   ${
                  scrolled ? "text-slate-100" : ""
                }`}
              >
                Sicherheitsdienstleistungen
              </Link>
            </li>
            <li
              id="navbar"
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  mx-1"
            >
              <Link
                to="/career"
                className={`text-sm xl:text-lg ${
                  props.page === "Home" ? "text-white" : "text-sky-700"
                }  hover:text-yellow-400 font-semibold  p-1.5 xl:p-2 rounded-full   ${
                  scrolled ? "text-slate-100" : ""
                }`}
              >
                Karriere
              </Link>
            </li>
            <li
              id="navbar"
              className=" transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  flex  items-center  mx-1"
            >
              <Link
                to="/contactus"
                className={`text-sm xl:text-lg ${
                  props.page === "Home" ? "text-white" : "text-sky-700"
                }  hover:text-yellow-400 font-semibold  p-1.5 xl:p-2 rounded-full   ${
                  scrolled ? "text-slate-100" : ""
                }`}
              >
                Kontaktiere uns
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
