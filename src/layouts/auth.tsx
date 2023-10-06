import * as React from "react";

interface Props extends React.PropsWithChildren {
  className?: string;
}

export const AuthLayout: React.FC<Props> = ({ children }: Props) => {
  return <div>{children}</div>;
};

AuthLayout.displayName = "AuthLayout";
