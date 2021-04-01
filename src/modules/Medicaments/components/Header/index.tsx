import { Divider } from "ui/Divider";
import TextField from "ui/TextField";
import { Bar, Info, Infos, Wrapper } from "./styles";

export function Header() {
  const handleClick = () => {};
  return (
    <Wrapper>
      <Bar>
        <TextField handleClick={handleClick} />
        <Infos>
          <Info color="primary"> 2568 Meds</Info>
          <Info color="success"> 256 New</Info>
          <Info color="warning"> 235 Deprecated</Info>
        </Infos>
      </Bar>
      <Divider width="100%" />
    </Wrapper>
  );
}
