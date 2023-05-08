import React from 'react';
import styled from 'styled-components';

interface SpanProps {
  children?: React.ReactNode;
  size?: number;
  color?: string;
  weight?: string | number;
  margin?: string;
  font?: string;
}

const StyledSpan = styled.span<SpanProps>`
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-size: ${(props) => (props.size ? `${props.size}rem` : '1rem')};
  font-family: ${(props) => (props.font ? `${props.font}` : 'PretendardRegular')};
`;

export function Span({ children, size, color = 'black', weight, margin = '0px', font }: SpanProps) {
  const CommonPros = {
    size,
    color,
    weight,
    margin,
    font,
  };
  return <StyledSpan {...CommonPros}>{children}</StyledSpan>;
}
