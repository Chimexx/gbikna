import styled from "styled-components";
import { colors } from "../../style";

interface IButtonProps {
  color?: string;
  background?: string;
  border?: string;
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  borderradius?: string;
}

export const NavBarContainer = styled.nav<{
  scrolled: boolean;
}>`
  position: fixed;
  top: 0;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.primary};
  box-shadow: ${({ scrolled }) =>
    scrolled
      ? "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
      : "none"};

  transition: opacity 0.3s ease-in-out;
  z-index: 10;
  padding: 0 12rem;
  box-sizing: border-box;
  transition: all ease-in-out 0.3s;

  .menu {
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 13;
  }
  .close {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    cursor: pointer;
    z-index: 13;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
    height: 5rem;

    .menu {
      display: flex;
      transition: all ease-in-out 0.3s;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.div`
  img {
    width: 10rem;
  }

  @media screen and (max-width: 768px) {
    img {
      width: 6rem;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Link = styled.a<{ current: boolean }>`
  text-decoration: none;
  color: ${({ current }) => (current ? colors.deepBlue : "white")};
  font-size: 1rem;
  transition: color 0.2s;
  font-weight: 500;

  &:hover {
    color: ${colors.deepBlue};
  }

  @media screen and (max-width: 768px) {
    height: 2.5rem;
    padding: 0 1rem;
    color: #3f3f3f;
    text-decoration: none;
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    color: ${({ current }) => (current ? "white" : colors.primary)};
    background-color: ${({ current }) =>
      current ? colors.primary : "transparent"};

    &:hover {
      background: ${colors.deepBlue};
      color: #ffffff;
    }
  }
`;

export const Button = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width ?? "fit-content"};
  border: ${({ border }) => border ?? "none"};
  background: ${({ background }) => background ?? colors.secondary};
  border-radius: ${({ borderradius }) => borderradius ?? "0.4rem"};
  color: ${({ color }) => color ?? "white"};
  font-size: ${({ fontSize }) => fontSize ?? "1rem"};
  padding: ${({ padding }) => padding ?? "0.5rem 1rem"};
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {
    background: ${colors.deepBlue};
    color: #ffffff;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #00000092;
  transition: opacity 0.3s ease-in-out;
  z-index: 11;
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const MobileNav = styled.div<{ showNav: boolean }>`
  display: ${({ showNav }) => (showNav ? "flex" : "none")};
  width: 80%;
  position: fixed;
  top: 0rem;
  right: ${({ showNav }) => (showNav ? "0" : "-300px")};
  flex-direction: column;
  height: 100vh;
  z-index: 13;
  padding-top: 3rem;
  background-color: white;
  transition: all ease-in-out 0.3s;
  overflow: hidden;
`;
