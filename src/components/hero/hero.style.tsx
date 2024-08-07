import styled from "styled-components";
import { colors } from "../../style";

export const HeroContainer = styled.section`
  height: calc(100dvh - 5rem);
  width: 100%;
  padding: 5rem 12rem 0 12rem;
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
  box-sizing: border-box;
  background-color: transparent;

  @media screen and (max-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2rem;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const FeatureWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: auto;
  margin: 2rem 0;
`;

export const FeatureCard = styled.div`
  height: 10.125rem;
  width: 10rem;
  padding: 1.5rem;
  flex: 1 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid #ffffff7d;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  svg {
    color: ${colors.primary};
    font-size: 2rem;
  }

  &:hover {
    border: 1px solid ${colors.primary};
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
