import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
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
  const className = "uppercase text-sm active:font-semibold"

  return (
    <div className="font-Fredoka">
      <nav className="flex justify-between items-center w-full max-w-[1366px] mx-auto px-5 pt-[30px] pb-5">
        <div className="cursor-pointer">
          <Image alt="logo" src="/logo.png" width={200} height={20} />
        </div>
        <div className="flex items-center space-x-[60px]">
          <div className="space-x-[75px]">
            {navItem.map(({ label, link }) => (
              <Link className={className} href={link} key={label}>{label}</Link>
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
