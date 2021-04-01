import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  /* gap: 5px; */
  padding: 10px;
  min-height: 100vh;
  grid-template-areas:
    "header header header"
    "menu content content"
    "footer footer footer";
  grid-template-columns: 150px 1fr 1fr;
  grid-template-rows: 8vh auto 8vh;
  gap: 5px;
  @media (max-width: 600px) {
    grid-template-areas:
      "header header"
      "content content"
      "footer footer";
    grid-template-columns: 150px 1fr;
  }
  grid-auto-flow: dense;
  background-color: whitesmoke;
`;

export const Header = styled.div`
  grid-area: header;
  max-height: 8vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 1000;
  padding: 16px;
  left: 165px;
  border: 1px solid #658685;
  border-radius: 6px;
  box-shadow: 1px 1px 8px 2px #9899a1;
  background-color: white;
`;

export const Menu = styled.div`
  border: 1px solid #658685;
  border-radius: 6px;
  box-shadow: 1px 1px 8px 2px #9899a1;
  background-color: white;
  @media (max-width: 600px) {
    display: ${(props) => props.className};
    position: absolute;
    top: 40px;
    left: 25px;
    max-height: 90vh;
    /* overflow-y: scroll; */
    z-index: 6884;
  }
  color: ${({ theme: { palette } }) => palette.primary.main};
  padding: 8px;
  grid-area: menu;
  max-width: 200px;
`;

export const MenuButton = styled.div`
  cursor: pointer;
  display: none;
  padding: 8px;
  @media (max-width: 600px) {
    display: flex;
  }
`;

export const MenuItem = styled.div`
  cursor: pointer;
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 5px;
  justify-content: space-evenly;
  display: flex;
  justify-content: flex-start;
  &a {
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
  &:focus {
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
  &:hover {
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
  &.BigItem {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  grid-area: content;
  padding: 16px;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
  border: 1px solid #658685;
  border-radius: 6px;
  box-shadow: 1px 1px 8px 2px #9899a1;
  background-color: white;
`;

export const Footer = styled.div`
  grid-area: footer;
  height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
