import Image from "next/image";
import * as React from "react";

import Logo from "@/assets/images/logo.png";

type Props = React.PropsWithChildren;

export const AuthBox: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="container max-w-lg mx-auto px-4">
      <div className="min-h-screen flex flex-col justify-center">
        <div className="text-center">
          <Image
            className="mx-auto"
            src={Logo}
            alt={"Logo"}
            width={100}
            height={100}
          />
        </div>
        {children}
      </div>
    </div>
  );
};

AuthBox.displayName = "AuthBox";
