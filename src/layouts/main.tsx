import * as React from "react";

interface Props extends React.PropsWithChildren {
  className?: string;
}

export const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return <div>{children}</div>;
};

MainLayout.displayName = "MainLayout";
