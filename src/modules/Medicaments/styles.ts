import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 300px));
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 10px;
  max-height: 80vh;
  overflow-y: auto;
`;