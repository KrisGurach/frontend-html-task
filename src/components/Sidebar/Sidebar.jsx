import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";
import { bottomRoutes, routes } from "./routes";
import { lightTheme, darkTheme } from "./theme";
import { Container, Logo, Menu, MenuItem, MenuTitle, ToggleButton, ThemeToggleButton } from "./SidebarStyles";
import { ThemeProvider } from "styled-components";

const Sidebar = (props) => {
  const { color } = props;

  const {pathname} = useLocation();
  const navigate = useNavigate();

  const [isOpened, setIsOpened] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(color === "light");

  const containerClassnames = classnames("sidebar", { opened: isOpened });

  const goToRoute = (path) => {
    navigate(path, { replace: true });
  };

  const toggleSidebar = () => {
    setIsOpened((v) => !v);
  };

  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  const currentThemeToUse = isLightTheme ? lightTheme : darkTheme;

  return (
    <div className={containerClassnames}>
      <ThemeProvider theme={currentThemeToUse}>
      <Container isopen={isOpened}>
        <Logo isopen={isOpened}>
          <img
            src={logo}
            alt="TensorFlow logo"
          />
          <span>TensorFlow</span>
        </Logo>

        <Menu isopen={isOpened}>
          {routes.map((route) => (
            <MenuItem
              isopen={isOpened}
              isactive={pathname === route.path}
              key={route.title}
              onClick={() => {
                goToRoute(route.path);
              }}
            >
              <FontAwesomeIcon icon={route.icon} />
              <MenuTitle isopen={isOpened}>
                {route.title}
              </MenuTitle>
            </MenuItem>
          ))}
        </Menu>

        <Menu isopen={isOpened}>
          {bottomRoutes.map((route) => (
            <MenuItem
              isopen={isOpened}
              isactive={pathname === route.path}
              key={route.title}
              onClick={() => {
                goToRoute(route.path);
              }}
            >
              <FontAwesomeIcon icon={route.icon} />
              <MenuTitle isopen={isOpened}>
                {route.title}
              </MenuTitle>
            </MenuItem>
          ))}
        </Menu>
      </Container>

      <ToggleButton 
        onClick={toggleSidebar}
        isopen={isOpened}
      >
        <FontAwesomeIcon icon={isOpened ? "angle-left" : "angle-right"} />
      </ToggleButton>

    {/* Добавила кнопку переключения темы */}
      <ThemeToggleButton onClick={toggleTheme}>
        <FontAwesomeIcon icon={isLightTheme ? "sun" : "moon"} />
      </ThemeToggleButton>
      </ThemeProvider>
    </div>
  );
};

Sidebar.propTypes = {
  color: PropTypes.string,
};

export default Sidebar;
