import React, { ReactNode } from "react";
import { Content, Footer, Header, Menu, MenuButton, Wrapper } from "./styles";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [displayMenu, setDisplayMenu] = React.useState(false);
  const toggleMenu = () => {
    setDisplayMenu((cur) => !cur);
  };
  return (
    <>
      <Wrapper>
        <Content>{children}</Content>
        <Header>
          <MenuButton onClick={toggleMenu}>menu</MenuButton>
        </Header>
        <Footer>Footer</Footer>
        <Menu id="menu" className={displayMenu ? "inline" : "none"}>
          <p>
            Pariatur occaecat sunt esse amet aliqua exercitation sint veniam
            consectetur ipsum elit occaecat. Ex cupidatat cillum anim laboris
            ipsum Lorem reprehenderit deserunt aliqua. Ut duis voluptate
            consequat aliqua sit et. Velit id duis ad eiusmod amet aliquip
            deserunt consequat. Ullamco excepteur ullamco fugiat quis deserunt
            labore pariatur commodo incididunt voluptate ullamco. Voluptate
            commodo Lorem culpa ipsum.
          </p>
        </Menu>
      </Wrapper>
    </>
  );
}
