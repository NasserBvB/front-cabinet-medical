import React, { HTMLAttributes } from "react";
import { Wrapper } from "./styles";
interface IProps extends HTMLAttributes<HTMLHRElement> {
  width: string;
}
export function Divider({ width, ...rest }: IProps) {
  return <Wrapper className={width} {...rest} />;
}
