import React, { FC, HTMLAttributes, memo, ReactNode } from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      Không tìm thấy
    </div>
  );
};

NotFound.displayName = "NotFound";

export default memo(NotFound);
