import { InputHTMLAttributes } from "react";
import { Input as InputWrapper, Wrapper } from "./styles";

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: Iprops) {
  return (
    <Wrapper>
      <InputWrapper {...rest} />
    </Wrapper>
  );
}
