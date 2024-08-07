import styled from "styled-components";
import { colors } from "../../style";

export const AboutContainer = styled.section`
  width: 100%;
  padding: 4rem 12rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: white;
  justify-content: space-between;
  flex-direction: column;
  gap: 8rem;
  position: relative;

  .contour {
    position: absolute;
    left: -3rem;
    width: 70%;
    opacity: 0.1;
    z-index: 0;
  }

  @media screen and (max-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: column;
    gap: 5rem;

    .group1 {
      flex-direction: column-reverse;
    }

    .contour {
      top: 12rem;
      width: 300px;
    }
  }
`;

export const AboutEntry = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
  z-index: 1;
  gap: 2rem;

  .image {
    width: 50%;

    img {
      width: 100%;
    }
  }

  .text {
    width: 50%;
  }

  .service2 {
    svg {
      min-width: 3rem;
      font-size: 3rem;
      color: ${colors.primary};
      margin-top: 3px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;

    .image {
      width: 100%;
    }

    .text {
      width: 100%;
    }

    .service2 {
      svg {
        min-width: 2rem;
        font-size: 2rem;
      }
    }
  }
`;
