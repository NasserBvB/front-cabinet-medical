import React, { InputHTMLAttributes } from "react";
import { Input, Label, Wrapper } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function CheckBox(props: IProps) {
  return (
    <Wrapper>
      <Input {...props} type="checkbox" />
      <Label>{props.label}</Label>
    </Wrapper>
  );
}
