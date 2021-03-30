import React, { HTMLAttributes } from "react";
import { Wrapper } from "./styles";
interface IProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const FabButton = ({ children, onClick, ...rest }: IProps) => {
  return (
      <Wrapper onClick={onClick} {...rest}>
        {children}
      </Wrapper>
  );
};
export default FabButton;
