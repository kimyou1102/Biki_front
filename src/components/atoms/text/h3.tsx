import React from 'react';
import styled from 'styled-components';

interface H3Props {
  children?: React.ReactNode;
  size?: number;
  weight?: string | number;
  color?: string;
  font?: string;
  margin?: string;
  lineheight?: number;
}

const StyledH3 = styled.h3<H3Props>`
  font-size: ${(props) => (props.size ? `${props.size * 0.8}rem` : '1rem')};
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  color: ${(props) => props.color};
  font-family: ${(props) => (props.font ? `${props.font}` : 'PretendardRegular')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  line-height: ${(props) => (props.lineheight ? `${props.lineheight}rem` : 'inherit')};
`;

export function H3({ children, size, weight, color = 'black', font, margin, lineheight }: H3Props) {
  const CommonProps = { size, weight, color, font, margin, lineheight };
  return <StyledH3 {...CommonProps}>{children}</StyledH3>;
}
