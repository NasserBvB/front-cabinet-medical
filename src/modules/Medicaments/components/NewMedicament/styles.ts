import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* background-color: #666; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`;

export const Fields = styled.div`
  display: grid;
  align-items: center;
  align-content: center;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(150px, 210px));
  gap: 16px;
  padding: 16px;
  flex: 1;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
