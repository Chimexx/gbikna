import styled from "styled-components";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

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
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;

  #content {
    padding-top: 5rem;
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    background: white;
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const colors = {
  primary: "#2b86c7",
  deepBlue: "#0d3151",
  secondary: "#e2b734",
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

interface Props {
  children: React.JSX.Element;
  width?: "fit-content" | "100%";
}
export const Reveal = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width: "100%" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.9 }}>
        {children}
      </motion.div>
    </div>
  );
};

