import { InputHTMLAttributes } from "react";
import { Input as InputWrapper, Label, Wrapper } from "./styles";

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...rest }: Iprops) {
  return (
    <Wrapper>
      {label && <Label>{label}</Label>}
      <InputWrapper {...rest} />
    </Wrapper>
  );
}
