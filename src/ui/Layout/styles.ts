import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: grid;
  /* gap: 5px; */
  padding: 10px;
  min-height: 100vh;
  grid-template-areas: "menu header header"
                        "menu content content"
                        "footer footer footer";
  grid-template-columns: 150px 1fr 1fr;
  grid-template-rows: 8vh auto 8vh;
  gap: 5px; 
   @media (max-width: 420px) {
        grid-template-areas: "header header"
                         "content content"
                          "footer footer";
        grid-template-columns: 150px 1fr;
        grid-template-rows: 8vh auto 8vh;
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
  background-color: RGBA(0,0,0,0.5);
`

export const Menu = styled.div`
  @media (max-width: 420px) {
    display: ${(props) => props.className};
    position: absolute;
    top: 40px;
    left: 25px;
    border: 1px solid #658685;
    border-radius: 6px;
    max-height: 90vh;
  }
    padding: 8px;
    z-index: 8253;
  background-color: #658685;
  grid-area: menu;
  max-width: 200px;
  overflow-y: scroll;
`

export const MenuButton = styled.div`
  cursor: pointer;
  display: none;
  padding: 8px;
  @media (max-width: 420px) {
    display: flex;
  }
`

export const MenuItem = styled.div`
  padding:8px;
  margin-top: 5px;
  margin-bottom: 5px;
  justify-content: space-evenly;
  display: flex;
  &.BigItem {
    justify-content: flex-start;
    flex-direction: column;
  }
`


export const Content = styled.div`
background-color: #666666;
  grid-area: content;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Footer = styled.div`
background-color: #666685;
  grid-area: footer;
  height: 8vh;
`
