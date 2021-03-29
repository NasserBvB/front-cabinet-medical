import styled from "@emotion/styled";

export const Wrapper = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 56px;
  height: 56px;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  border-radius: 50%;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  color: #fff;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
  
  &:focus {
    outline: 0px;
  }
`;
