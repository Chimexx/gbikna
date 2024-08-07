import styled from "styled-components";

interface IText {
  fontSize?: string;
  color?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
  noWrap?: boolean;
  width?: string;
  maxWidth?: string;
  textTransform?:
    | "capitalize"
    | "upppercase"
    | "lowercase"
    | "match-auto"
    | "none";
  textOverflow?:
    | "ellipsis"
    | "clip"
    | "inherit"
    | "initial"
    | "revert"
    | "unset";
  mdResponsive?: string;
  smResponsive?: string;
  fontFamily?: string;
  textalign?: string;
}

interface IFlex {
  flexdirection?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: string;
  minWidth?: string;
  height?: string;
  maxWidth?: string;
  minHeight?: string;
  alignSelf?: string;
  margin?: string;
  padding?: string;
  maxHeight?: string;
  fontSize?: string;
  gap?: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("/src/assets/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
  background-attachment: fixed;
  background-color: transparent;
  overflow-y: scroll;
  position: relative;

  #content {
    padding-top: 5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const colors = {
  primary: "#2b86c7",
  text: "#363636",
  grey: "#828282",
};

export const Text = styled.p<IText>`
  font-size: ${({ fontSize }) => fontSize ?? "1rem"};
  color: ${({ color }) => color || "#fff"};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  text-align: ${({ textalign }) => textalign};
  margin: ${({ margin }) => margin ?? "0px"};
  padding: ${({ padding }) => padding ?? "0px"};
  width: ${({ width }) => width};
  ${({ textTransform }) => textTransform && "text-transform: " + textTransform};
  ${({ textOverflow }) => textOverflow && "text-overflow: " + textOverflow};

  ${({ noWrap }) =>
    noWrap &&
    `
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

export const Flex = styled.div<IFlex>`
  display: flex;
  flex-direction: ${({ flexdirection }) => flexdirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent ?? "unset"};
  align-items: ${({ alignItems }) => alignItems ?? "unset"};
  width: ${({ width }) => width || "100%"};
  min-width: ${({ minWidth }) => minWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  height: ${({ height }) => height ?? "auto"};
  min-height: ${({ minHeight }) => minHeight ?? "auto"};
  max-height: ${({ maxHeight }) => maxHeight ?? "auto"};
  align-self: ${({ alignSelf }) => alignSelf ?? "unset"};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding ?? "0px"};
  font-size: ${({ fontSize }) => fontSize ?? "unset"};
  gap: ${({ gap }) => gap ?? "0px"};
`;
