import styled from "styled-components";
import { colors } from "../../style";

export const HeroContainer = styled.section<{ fade: boolean }>`
  height: 600px;
  width: 100%;
  padding: 0rem 12rem 0 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.primary};
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  .text {
    z-index: 2;
  }

  .spiral {
    width: 50%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    z-index: 1;
  }

  .header {
    font-size: 5rem;
  }
  .title {
    position: relative;
  }

  .shade {
    position: absolute;
    bottom: 0.5rem;
    right: 1rem;
    width: 12rem;
  }

  .subText {
    transition: opacity 1s ease, transform 1s ease;
    opacity: ${({ fade }) => (fade ? 0 : 1)};
    transform: ${({ fade }) => (fade ? "translateY(20px)" : "")};
    font-size: 3rem;
  }

  @media screen and (max-width: 1024px) {
    padding-left: 3rem;
    padding-right: 3rem;

    .subText {
      font-size: 2rem;
    }
    .button {
      max-width: 12rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    height: fit-content;
    min-height: 350px;
    background-size: cover;

    .header {
      font-size: 2rem;
    }
    .shade {
      bottom: 0.3rem;
      right: 0rem;
      width: 5rem;
    }

    .subText {
      font-size: 1.5rem;
    }

    .buttons {
      width: 100%;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    .button {
      max-width: 12rem;
      width: 12rem;
    }
  }

  @media screen and (max-width: 430px) {
    .button {
      width: 100%;
      max-width: 100%;
      padding: 0.5rem;
    }
  }
`;
