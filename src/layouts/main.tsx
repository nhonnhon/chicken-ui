import * as React from "react";

interface Props extends React.PropsWithChildren {
  className?: string;
}

export const MainLayout: React.FC<Props> = ({ children }: Props) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

MainLayout.displayName = "MainLayout";
