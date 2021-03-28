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
      
`;

export const Header = styled.div`
background-color: #626685;
  grid-area: header;
  max-height: 8vh;
`

export const Menu = styled.div`
  @media (max-width: 420px) {
    display: ${(props) => props.className};
    position: absolute;
    top: 40px;
    left: 25px;
    border: 1px solid #658685;
    border-radius: 6px;
  }
    padding: 8px;
  background-color: #658685;
  grid-area: menu;
  max-width: 150px;
`

export const MenuButton = styled.div`
  cursor: pointer;
  background-color: #658625;
  display: none;
  @media (max-width: 420px) {
    display: inline;
    position: absolute;
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
