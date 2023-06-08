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
  className?: string;
}

const StyledP = styled.p<TextProps>`
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-size: ${(props) => (props.size ? `${props.size * 0.8}rem` : '1rem')};
  font-family: ${(props) => (props.font ? `${props.font}` : 'PretendardRegular')};
  position: ${(props) => (props.position ? props.position : 'relative')};

  &.right {
    text-align: right;
  }

  &.center {
    text-align: center;
  }
`;

export function Text({
  children,
  size = 1,
  color = 'black',
  weight,
  margin = '0px',
  font,
  position,
  className,
}: TextProps) {
  const CommonPros = {
    size,
    color,
    weight,
    margin,
    font,
    position,
    className,
  };
  return (
    <StyledP {...CommonPros} className={className}>
      {children}
    </StyledP>
  );
}
