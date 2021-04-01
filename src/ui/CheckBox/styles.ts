import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 10fr;
    align-items: center;
`

export const Input = styled.input`
    height: 20px;
    width: 20px;
    color: ${(props) => props.theme.palette.primary.main}
`;

export const Label = styled.label`
  color: ${(props) => props.theme.palette.primary.main};
`;