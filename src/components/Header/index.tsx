// components/Header.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";

import "../../styles/effects.css";

const Header = ({ navbarOpen, navbarToggleHandler }: { navbarOpen: boolean, navbarToggleHandler: () => void }) => {
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <header
      className={`header fadeInFromTop z-40 flex w-full self-end items-center px-6 transition-all ${(navbarOpen) ? " duration-300 ": " duration-700 "} ${
        (sticky)
          ? "dark:bg-gray-dark dark:shadow-sticky-dark bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm fixed z-[1000]"
          : "absolute bg-transparent"
        }
        ${(navbarOpen && !sticky)
          ? " transition lg:w-4/6 lg:bg-transparent lg:dark:bg-transparent lg:dark:shadow-none lg:bg-transparent lg:!bg-opacity-100 lg:shadow-none lg:backdrop-blur-0" : ''
        }
        ${(navbarOpen && sticky)
          ? " transition lg:w-4/6" : ''
        }
      `}
    >
      <div className="container">
        <div className="relative py-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link
              href="/"
              className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"}`}
            >
              <Image
                src="/images/logo/n510.png"
                alt="logo"
                width={140}
                height={30}
                className="w-full dark:invert"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-black dark:ring-white focus:ring-2"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
            </div>
            <div className="flex items-center justify-end pr-16">
              <div>
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
