import { useState } from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import { bottomRoutes, routes } from "./routes";
import { lightTheme, darkTheme } from "./theme";
import { Container, Logo, Menu, MenuItem, MenuTitle } from "./SidebarStyles";

const Sidebar = (props) => {
  const { color } = props;
  const currentTheme = color === "light" ? lightTheme : darkTheme;

  const [isOpened, setIsOpened] = useState(false);
  const containerClassnames = classnames("sidebar", { opened: isOpened });

  const goToRoute = (path) => {
    console.log(`going to "${path}"`);
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  return (
    <div className={containerClassnames}>
      <Container theme={currentTheme} isopen={isOpened}>
        <Logo theme={currentTheme} isopen={isOpened}>
          <img
            src={logo}
            alt="TensorFlow logo"
          />
          <span>TensorFlow</span>
        </Logo>

        <Menu theme={currentTheme} isopen={isOpened}>
          {routes.map((route) => (
            <MenuItem
              theme={currentTheme}
              isopen={isOpened}
              key={route.title}
              onClick={() => {
                goToRoute(route.path);
              }}
            >
              <FontAwesomeIcon icon={route.icon} />
              <MenuTitle theme={currentTheme} isopen={isOpened}>
                {route.title}
              </MenuTitle>
            </MenuItem>
          ))}
        </Menu>

        <Menu theme={currentTheme} isopen={isOpened}>
          {bottomRoutes.map((route) => (
            <div
              key={route.title}
              onClick={() => {
                goToRoute(route.path);
              }}
            >
              <FontAwesomeIcon icon={route.icon} />
              <MenuTitle theme={currentTheme} isopen={isOpened}>
                {route.title}
              </MenuTitle>
            </div>
          ))}
        </Menu>
      </Container>

      <div onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
