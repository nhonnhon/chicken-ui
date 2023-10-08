import React, {
  ButtonHTMLAttributes,
  FC,
  MouseEventHandler,
  ReactNode,
} from "react";
import classNames from "classnames";

import {
  AnchorTargetType,
  ButtonVariantType,
  ColorType,
  ICoreUIBaseProps,
  XPosition,
} from "../types";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  text?: string;
  loading?: boolean;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  children?: ReactNode;
  dataCy?: string;
  type?: "button" | "submit" | "reset";
  color?: ColorType;
  loadingPosition?: XPosition;
  variant?: ButtonVariantType;
  onClick?: MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  target?: AnchorTargetType;
}

const Button: FC<IButtonProps & ICoreUIBaseProps> = ({
  className,
  children,
  href,
  text,
  target = "_self",
  color = "primary",
  type = "button",
  variant,
  visible = true,
  disabled = false,
  onClick,
  dataCy,
}) => {
  const content = text ? <p>{text}</p> : children;

  if (href) {
    return (
      <a
        className={classNames("btn", variant, color, className)}
        target={target}
        href={href}
        rel="noreferrer"
      >
        {content}
      </a>
    );
  }

  if (!visible) return null;

  return (
    <button
      data-cy={dataCy || ""}
      className={classNames("btn", variant, color, className)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
