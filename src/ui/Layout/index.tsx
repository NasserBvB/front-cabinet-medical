import React, { ReactNode } from "react";
import { AiOutlineLock, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import {
  Content,
  Footer,
  Header,
  Menu,
  MenuButton,
  MenuItem,
  Wrapper,
} from "./styles";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [displayMenu, setDisplayMenu] = React.useState(false);
  const toggleMenu = () => {
    setDisplayMenu((cur) => !cur);
  };
  const mmenuRef = React.useRef(null);
  useOutsideAlerter(mmenuRef, setDisplayMenu);
  return (
    <>
      <Wrapper>
        <Content>{children}</Content>
        <Header>
          <MenuButton ref={mmenuRef} onClick={toggleMenu}>
            <AiOutlineMenu />
          </MenuButton>
        </Header>
        <Footer>Footer</Footer>
        <Menu id="menu" className={displayMenu ? "inline" : "none"}>
          <MenuItem className="BigItem">
            <strong>Medical app</strong>
            <MenuItem>Item 1</MenuItem>

            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 1</MenuItem>
          </MenuItem>
          <hr />

          <MenuItem className="BigItem">
            <strong>General</strong>
            <MenuItem>
              <AiOutlineUser /> Profile
            </MenuItem>
            <MenuItem>
              <AiOutlineLock /> Logout
            </MenuItem>
          </MenuItem>
        </Menu>
      </Wrapper>
    </>
  );
}
