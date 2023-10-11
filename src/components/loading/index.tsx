import React, { FC, HTMLAttributes, memo, ReactNode } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="animate-spin">
        <Image
          className="mx-auto"
          src={Logo}
          alt={"Logo"}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

Loading.displayName = "Loading";

export default memo(Loading);
