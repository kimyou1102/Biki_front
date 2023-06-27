import React from 'react';
import styled from 'styled-components';

interface SpanProps {
  children?: React.ReactNode;
  size?: number;
  color?: string;
  weight?: string | number;
  margin?: string;
  font?: string;
  className?: string;
  display?: string;
  textoverflow?: number;
  lineheight?: number;
}

const StyledSpan = styled.span<SpanProps>`
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  font-size: ${(props) => (props.size ? `${props.size * 0.8}rem` : '1rem')};
  font-family: ${(props) => (props.font ? `${props.font}` : 'PretendardRegular')};
  display: ${(props) => (props.display ? props.display : 'inline')};
  &.text-overflow {
    width: ${(props) => `calc(100% - ${props.textoverflow}px)`};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.line-height {
    line-height: ${(props) => `${props.lineheight}px`};
  }
`;

export function Span({
  children,
  size = 1,
  color = 'black',
  weight,
  margin = '0px',
  font,
  className,
  display,
  textoverflow = 0,
  lineheight,
}: SpanProps) {
  const CommonPros = {
    size,
    color,
    weight,
    margin,
    font,
    className,
    display,
    textoverflow,
    lineheight,
  };
  return (
    <StyledSpan {...CommonPros} className={className}>
      {children}
    </StyledSpan>
  );
}
