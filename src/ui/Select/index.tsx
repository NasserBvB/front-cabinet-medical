import React, { HTMLAttributes } from "react";
import { Label, Select as CustomSelect, Wrapper } from "./styles";
interface IProps extends HTMLAttributes<HTMLSelectElement> {}
const Select = ({ "aria-label": areaLabel, children }: IProps) => {
  return (
    <Wrapper>
      <Label>{areaLabel}</Label>
      <CustomSelect name="CustomSelect please">{children}</CustomSelect>
    </Wrapper>
  );
};
export default Select;
