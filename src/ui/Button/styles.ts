import styled from "@emotion/styled";

export const Wrapper = styled.button`
  background-color: ${({ theme }) => theme.palette.info.main};
  border: none;
  color: #fff;
  padding: 1rem 1.6rem;
  border-radius: 2px;
  cursor: pointer;
  &:focus {
    border: none;
    outline: none;
  }
`;
