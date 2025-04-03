"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaHeart, FaHome, FaUser } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
// import { FiMenu, FiX } from "react-icons/fi";

const navItem = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Favorites",
    link: "/favorites",
  },
  {
    label: "Profile",
    link: "/profile",
  },
];

export const Navbar = () => {
  const pathName = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const className =
    "uppercase text-sm active:font-medium  pb-4 lg:pb-[20px] inline-block ";

  return (
    <div className="font-Fredoka">
      <nav className="flex justify-between items-center w-full max-w-[1366px] mx-auto px-5  sm:px-10 lg:px-20 pt-[30px] ">
        <div className="cursor-pointer z-50">
          <Link href="/">
            <Image alt="logo" src="/logo.png" width={200} height={20} />
          </Link>
        </div>

        <div className="hidden  md:flex items-center justify-between gap-5 ">
          <div className=" ">
            {navItem.map(({ label, link }) => (
              <Link
                className={cn(
                  className,
                  "px-5 lg:px-[37.5px]",
                  pathName === link && "font-medium border-b-2 border-[#ffa700]"
                )}
                href={link}
                key={label}
              >
                {label}
              </Link>
            ))}
          </div>
          <button type="button" className={`cursor-pointer ${className}`}>
            Logout
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-50"
        >
          {menuOpen ? (
            <FiX className="text-2xl" />
          ) : (
            <FiMenu className="text-2xl" />
          )}
        </button>

        {menuOpen && (
          <div className="absolute top-0 left-0 w-full  h-screen bg-[#b3b3b3] flex flex-col pt-24 items-start pl-4 gap-6 text-lg md:hidden ">
            {navItem.map(({ label, link }) => (
              <Link
                className={cn(
                  className,
                  "px-5 lg:px-[37.5px]",
                  pathName === link &&
                    " font-medium border-l-2 border-[#ffa700]"
                )}
                href={link}
                key={label}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <button type="button" className={`cursor-pointer  pl-5 ${className}`}>
              Logout
            </button>
          </div>
        )}
      </nav>
      <hr className="bg-[#d2d2d2]" />
    </div>
  );
};
