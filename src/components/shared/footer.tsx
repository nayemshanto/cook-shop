import { IChildrenClassName } from "@/interface";
import { cn } from "@/lib/utils";
import { link } from "fs";
import Link from "next/link";
import React, { FC } from "react";

const Item: FC<IChildrenClassName> = ({ className, children }) => (
  <div className={cn("flex items-end gap-[15px] flex-col", className)}>
    <p>{children}</p>
    <hr className="w-[183px] bg-[#c2c2c2]" />
  </div>
);

export const Footer = () => {
  const items = [
    { label: "Who we are", link: "/",},
    { label: "terms", link: "/",},
    { label: "Privacy", link: "/",},
    { label: "Contact us", link: "/",},
  ];
  return (
    <footer className=" flex flex-col justify-center items-center gap-2.5  w-fit mx-auto text-[#494949] ">
      <div className="flex justify-between gap-20 items-end">
        <Item>@ 2023 Cookshow</Item>
        <p className=" text-base"> Cook your way</p>
        <Item className="items-start"> All Rights Reserved</Item>
      </div>
      <div className="flex justify-between items-center gap-2.5 w-full py-2.5 pb-5">
        {items.map(({label, link}) =>(
          <Link key={label} className="text-[14px]" href={link}>{label}</Link>
        ))}
      </div>
    </footer>
  );
};
