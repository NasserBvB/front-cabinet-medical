import React from "react";
import { Wrapper } from "./styles";
type ButtonProps = {
  children: string;
};
export default function Button({ children }: ButtonProps) {
  return <Wrapper>{children.toUpperCase()}</Wrapper>;
}
