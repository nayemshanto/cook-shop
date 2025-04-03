import HomeSearch from "@/components/pages/HomeSearch";

import Image from "next/image";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[80svh] w-full px-2.5 gap-2.5">
      <figure className="flex items-center justify-center pb-2.5">
        <Image alt="logo" src="/logo.svg" height={136} width={137} />
      </figure>
      <HomeSearch />
    </div>
  );
};

export default HomePage;
