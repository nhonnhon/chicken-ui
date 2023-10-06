// import Image from 'next/image';
import * as React from "react";

// import Logo from '@/assets/images/logo.png';

// import {LoginContainer, LoginLogo} from './auth.styled';

type Props = React.PropsWithChildren;

export const AuthBox: React.FC<Props> = ({ children }: Props) => {
  return (
    <div>
      <div>Logo here</div>
      {children}
    </div>
  );
};

AuthBox.displayName = "AuthBox";
