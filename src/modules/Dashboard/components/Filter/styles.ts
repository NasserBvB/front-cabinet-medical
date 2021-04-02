import styled from "@emotion/styled";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: space-between;
    align-items: center; */
`

export const Results = styled.div`
  position: relative;
  margin-top: 8px;
  padding: 8px;
  display: grid;
  gap: 10px;
  justify-content: flex-start;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  min-width: 80%;
  @media (max-width: 850px) {
    min-width: 30%;
  }

  @media (max-width: 600px) {
    min-width: 40%;
  }

  max-height: 80vh;
  overflow-y: auto;
  /* align-items: center; */
`;

export const Header = styled.div`
`;