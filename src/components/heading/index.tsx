import React, { FC, HTMLAttributes, memo, ReactNode } from "react";
import classNames from "classnames";

import { HeadingType, ICoreUIBaseProps } from "../types";

interface IHeadingProps
  extends ICoreUIBaseProps,
    HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
  text?: string;
  as?: HeadingType;
  dataCy?: string;
}

const Heading: FC<IHeadingProps> = ({
  className,
  dataCy,
  visible = true,
  text,
  children,
  as = "h1",
  ...rest
}) => {
  if (!visible) return null;

  const Element = as;
  const content = text || children;
  return (
    <Element
      {...rest}
      className={classNames("heading", className)}
      data-cy={dataCy || ""}
    >
      {content}
    </Element>
  );
};

Heading.displayName = "Heading";

export default memo(Heading);
