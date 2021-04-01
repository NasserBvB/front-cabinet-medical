import styled from "@emotion/styled";
import { IColor } from "utils";

export const Wrapper = styled.div`

`

export const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
`;

export const Infos = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Info = styled.div<{color: IColor}>`
    padding: 8px;
    color: ${({ color, theme: {palette } }) => palette[color].main}
`