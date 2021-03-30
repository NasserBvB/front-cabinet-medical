import styled from "@emotion/styled";

export const Wrapper = styled.button`
  /* background-color: ${({ theme }) => theme.palette.info.main}; */
  border: none;
  color: #fff;
  padding: 4px 16px;
  border-radius: 10px;
  cursor: pointer;
  margin: auto 5px;
  min-height: 35px;
  max-height: 50px;
  min-width: 72px;
  max-width: 120px;
  &:focus {
    border: none;
    outline: none;
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
      0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  }
  &:hover {
    border: none;
    outline: none;
    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
      0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  }
`;
