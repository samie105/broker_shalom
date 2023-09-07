"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "../../ui/sheet";

import AuthUi from "../AuthUi/AuthUi";
import { DialogTrigger } from "../../ui/dialog";
import { Dialog } from "@radix-ui/react-dialog";
import { useTheme } from "../../../contexts/themeContext";

export default function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme, baseColor } = useTheme();

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 150;
      setIsScrolled(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Home" },
    { label: "Getting Started" },
    { label: "About Us" },
    { label: "Partners" },
    { label: "Features & Benefits" },
    { label: "Advantages" },
    { label: "Testimonials" },
    { label: "FAQ" },
  ];

  return (
    <>
      <div
        className={`nav-container flex justify-between duration-300 items-center py-6 px-5 transition-colors ${
          isScrolled ? `${baseColor}` : "bg-transparent"
        }`}
      >
        <div className="logo-area">
          <h2 className="font-bold text-base ">Broker Logo Name</h2>
        </div>
        <div className="Navigation-Items">
          <div className="itemcontainer lg:flex hidden text-sm">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.label}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeClass="font-bold"
                onSetActive={() => setActiveNavItem(item.label)}
              >
                <div
                  className={`text-xs ${
                    activeNavItem === item.label
                      ? "font-bold opacity-100"
                      : "font-normal opacity-40"
                  } pl-3 cursor-pointer transition-opacity duration-500 text-white ${
                    activeNavItem !== item.label
                      ? "text-white hover:opacity-100"
                      : ""
                  }`}
                  onClick={() => handleNavItemClick(item.label)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className=" items-center hidden lg:flex">
          {" "}
          <button
            className="theme-toggler text-white mx-4 p-3 bg-white/10 rounded-md"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          <Dialog>
            <DialogTrigger>
              <div className="ctaButtons lg:flex justify-between text-sm font-bold hidden items-center">
                <div
                  className="btn1 px-4 cursor-pointer flex py-3 bg-clip-tet text-transprent bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-700 to-orange-500 rounded-xl"
                  // style={{ backgroundColor: "#ffffff10" }}
                >
                  <p className="px-0.5 opacity-90">Sign In</p>
                </div>
              </div>
            </DialogTrigger>
            <AuthUi />
          </Dialog>
        </div>

        <div className="menu-bar cursor-pointer lg:hidden flex items-center">
          <button
            className="theme-toggler text-white mr-7  /bg-white/10 rounded-md"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          <Sheet>
            <SheetTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-gradient-to-b from-red-50 via-white to-white border-0 "
            >
              <SheetHeader className="text-white">
                <SheetTitle>
                  <div className=" font-bold">Broker Name</div>
                </SheetTitle>
              </SheetHeader>
              <div className="nav-menus mt-10 flex-col w-full flex">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.label}
                    spy={true}
                    smooth={true}
                    offset={-75}
                    duration={500}
                    className="w-full"
                    activeClass="font-bold"
                    onSetActive={() => setActiveNavItem(item.label)}
                  >
                    <SheetClose key={item.label} className="w-full">
                      <div
                        className={`menu-item mb-1 py-2 hover:opacity-90 text-gray-500 duration-200 cursor-pointer hover:bg-gray-100 px-1 //rounded-md flex items-center ${
                          activeNavItem === item.label
                            ? " opacity-100 border-black border-b-2 text-black font-bold //rounded-md hover:bg-green-50"
                            : ""
                        }`}
                        onClick={() => handleNavItemClick(item.label)}
                      >
                        <p>{item.label}</p>
                      </div>
                    </SheetClose>
                  </Link>
                ))}
              </div>
              <Dialog>
                <DialogTrigger>
                  <SheetClose>
                    <div className="cta-button justify-center text-sm flex items-center pr-12 cursor-pointer w-full absolute bottom-5">
                      <div className="w-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-700 via-rose-700 to-orange-700  text-white px-7 py-4 rounded-xl font-bold">
                        Login or Sign up
                      </div>
                    </div>
                  </SheetClose>
                </DialogTrigger>
                <AuthUi />
              </Dialog>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
}
