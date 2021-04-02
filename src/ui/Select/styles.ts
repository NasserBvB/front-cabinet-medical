import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #888888;
  margin-bottom: 8px;
`;

export const Select = styled.select`
  padding: 10px;
  border: 1px solid ${props => props.theme.palette.primary.main};
  border-radius: 10px;
  flex: 1;
  color: #757575;
  background-color: white;
  &:focus{
    outline: none;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  padding: 4px;
`;

export const Option = styled.option`
  background-color: #fff;
`;
