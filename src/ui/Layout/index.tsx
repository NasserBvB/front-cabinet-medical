import React, { ReactNode } from "react";
import { AiOutlineLock, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import {
  Content,
  Footer,
  Header,
  Menu,
  MenuButton,
  MenuItem,
  Wrapper
} from "./styles";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [displayMenu, setDisplayMenu] = React.useState(false);
  const toggleMenu = () => {
    setDisplayMenu((cur) => !cur);
  };
  const menuRef = React.useRef(null);
  useOutsideAlerter(menuRef, setDisplayMenu);
  return (
    <>
      <Wrapper>
        <Content>{children}</Content>
        <Header>
          <MenuButton onClick={toggleMenu}>
            <AiOutlineMenu />
          </MenuButton>
        </Header>
        <Footer>Cabinet medical {new Date().getFullYear()}©</Footer>
        <Menu
          id="menu"
          className={displayMenu ? "inline" : "none"}
        >
          <MenuItem className="BigItem">
            <strong>Medical app</strong>
            <Link to="/">
              <MenuItem>Dashboard</MenuItem>
            </Link>
            <Link to="/consultation">
              <MenuItem>Consultation</MenuItem>
            </Link>
            <Link to="/medicaments">
              <MenuItem>Medicaments</MenuItem>
            </Link>
            <Link to="#">
              <MenuItem>Autre</MenuItem>
            </Link>
          </MenuItem>
          <hr />

          <MenuItem className="BigItem">
            <strong>General</strong>
            <Link to="/profile">
              <MenuItem>
                <AiOutlineUser /> Profile
              </MenuItem>
            </Link>
            <Link to="/">
              <MenuItem>
                <AiOutlineLock /> Logout
              </MenuItem>
            </Link>
          </MenuItem>
        </Menu>
      </Wrapper>
    </>
  );
}
