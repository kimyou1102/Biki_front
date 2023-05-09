import React from 'react';
import styled from 'styled-components';

interface TextProps {
  children?: React.ReactNode;
  size?: number;
  color?: string;
  weight?: string | number;
  margin?: string;
  font?: string;
  position?: string;
}

const StyledP = styled.p<TextProps>`
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-size: ${(props) => (props.size ? `${props.size}rem` : '1rem')};
  font-family: ${(props) => (props.font ? `${props.font}` : 'PretendardRegular')};
  position: ${(props) => (props.position ? props.position : 'relative')};
`;

export function Text({ children, size, color = 'black', weight, margin = '0px', font, position }: TextProps) {
  const CommonPros = {
    size,
    color,
    weight,
    margin,
    font,
    position,
  };
  return <StyledP {...CommonPros}>{children}</StyledP>;
}
