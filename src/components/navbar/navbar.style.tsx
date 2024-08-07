import styled from "styled-components";
import { colors } from "../../style";

export const NavBarContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ scrolled }) => (scrolled ? "#000000e2" : "transparent")};
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

  @media screen and (max-width: 1024px) {
    padding: 0 2rem;
    height: 3rem;

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
  color: ${({ current }) => (current ? colors.primary : "white")};
  font-size: 1rem;
  transition: color 0.2s;
  font-weight: 500;

  &:hover {
    color: ${colors.primary};
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
      background: ${colors.primary};
      color: #ffffff;
    }
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: 2px solid ${colors.primary};
  background: transparent;
  border-radius: 0.4rem;
  color: #fff;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  &:hover {
    background: #004794;
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

export const MobileNav = styled.div`
  display: none;
  width: 90%;
  border-radius: 0.5rem;
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  flex-direction: column;
  height: 90vh;
  z-index: 13;
  background-color: white;
  transition: all ease-in-out 0.3s;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    display: flex;
  }
`;
