import { InputHTMLAttributes } from "react";
import Button from "ui/Button";
import { Input, Wrapper } from "./styles";

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {
  handleClick: () => void;
}

export default function TextField({ handleClick, ...rest }: Iprops) {
  return (
    <Wrapper>
      <Input {...rest} />
      <Button variant="outlined" onClick={handleClick}>
        Search
      </Button>
    </Wrapper>
  );
}
