import React from "react";
import { Wrapper } from "./styles";
interface IProps {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const FabButton = (props: IProps) => {
  return <Wrapper onClick={props.onClick}>{props.children}</Wrapper>;
};
export default FabButton;
