import styled, { css } from "styled-components";

const transition = css`
  transition: all 0.4s;
`;

const transform = css`
  transform: ${(props) =>
    props.isopen ? "translateX(0)" : "translateX(165px)"};
`;

const display = css`
  display: ${(props) => 
    props.isopen ? "block" : "none"}
`;

export const Container = styled.div`
  width: 220px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  box-sizing: border-box;
  border-radius: 16px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.background};
  transform: ${(props) =>
    props.isopen ? "translateX(0)" : "translateX(-170px)"};
  ${transition}
  &::before {
    content: "";
    position: absolute;
    width: 214px;
    height: 99.5vh;
    border: 3px solid ${(props) => props.theme.btnActiveBkgColor};
    border-radius: 16px;
  }
`;

export const Logo = styled.div`
  margin-left: 10px;
  margin-top: 5vh;
  margin-bottom: 10vh;
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${(props) => props.theme.logoColor};
  font-size: 1.5em;
  ${transform}

  img {
    width: 40px;
    height: 40px;
  }

  span {
    ${display};
    font-weight: 700;
  }
`;

export const Menu = styled.div`
  > * {
    width: ${(props) => (props.isopen ? "auto" : "20px")};
    margin: 8px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.hoverTextColor};
      background-color: ${(props) => props.theme.hoverBackground};
    }
    ${transform};
    ${transition}
  }
  margin-bottom: 10vh;
`;

export const MenuItem = styled.a`
  color: ${(props) => 
    props.isactive ? props.theme.activeTextColor : props.theme.textColor
  }
  ${transform};
  &:hover {
    cursor: pointer;
    color: ${(props) =>
      props.isactive ? props.theme.activeTextColor : props.theme.hoverTextColor};
`;

export const MenuTitle = styled.p`
  ${display}
`;

