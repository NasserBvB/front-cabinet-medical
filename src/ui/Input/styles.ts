import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  gap: 2px;
  align-items: center;
  flex: 1;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  &:focus {
    box-shadow: 1px 1px 4px 1px ${(props) => props.theme.palette.primary.main};
    outline: 0px;
  }
  &:hover {
    box-shadow: 1px 1px 4px 1px ${(props) => props.theme.palette.primary.main};
    outline: 0px;
  }
`;