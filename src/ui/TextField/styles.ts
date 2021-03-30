import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 10fr 2fr;
    gap: 2px;
    align-items: center;
` 

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
  /* outline: 1px solid #5b5e63; */
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  color: white;
  background-color: ${(props) => props.theme.palette.primary.main};
  border: 1px solid ${(props) => props.theme.palette.primary.main};
  &:focus {
    box-shadow: 1px 1px 4px 1px #9899a1;
    outline: 0px;
  }
  &:hover {
    box-shadow: 1px 1px 4px 1px #9899a1;
    outline: 0px;
  }
`;
