"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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

const Navbar = () => {
  const className =
    "uppercase text-sm active:font-medium pb-[20px] inline-block ";
  const pathName = usePathname();

  return (
    <div className="font-Fredoka">
      <nav className="flex justify-between items-center w-full max-w-[1366px] mx-auto px-5 pt-[30px] ">
        <div className="cursor-pointer">
          <Image alt="logo" src="/logo.png" width={200} height={20} />
        </div>
        <div className="flex items-center justify-between gap-5 ">
          <div className=" ">
            {navItem.map(({ label, link }) => (
              <Link
                className={cn(
                  className,
                  "px-[37.5px]",
                  pathName === link && "font-medium border-b-2 border-[#ffa700]"
                )}
                href={link}
                key={label}
              >
                {label}
              </Link>
            ))}
          </div>
          <button className={`cursor-pointer ${className}`}>Logout</button>
        </div>
      </nav>
      <hr className="bg-[#d2d2d2]" />
    </div>
  );
};

export default Navbar;
