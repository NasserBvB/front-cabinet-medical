import { useTheme } from "@emotion/react";
import React, { CSSProperties, HTMLAttributes } from "react";
import { IColor } from "utils";
import { Wrapper } from "./styles";
interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "filled" | "outlined" | "text";
  color?: IColor;
}
export default function Button({ color = 'primary', variant = 'filled', children, ...rest }: IProps) {
  const { palette } = useTheme();
  const outlined: CSSProperties = {
    backgroundColor: ''
  }

  if (variant === 'text')
  {
    outlined.backgroundColor = "";
    outlined.color = palette[color].dark;
  };

  if (variant === 'filled')
  {
    outlined.backgroundColor = palette[color].main;
  };

  if (variant === 'outlined')
  {
    outlined.color = palette[color].dark;
    outlined.border = "1px solid " + palette[color].dark;
  };

  return <Wrapper {...rest} style={outlined}>{children}</Wrapper>;
}
