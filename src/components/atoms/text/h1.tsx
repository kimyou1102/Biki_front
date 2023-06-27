import React from 'react';
import styled from 'styled-components';

interface H1Props {
  children?: React.ReactNode;
  display?: string;
  size?: number;
  weight?: string | number;
  color?: string;
  font?: string;
  margin?: string;
  lineHeight?: number;
  className?: string;
}

const StyledH1 = styled.h1<H1Props>`
  display: ${(props) => (props.display ? props.display : 'block')};
  font-size: ${(props) => (props.size ? `${props.size * 0.8}rem` : '1rem')};
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  color: ${(props) => props.color};
  font-family: ${(props) => (props.font ? `${props.font}` : 'PretendardRegular')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  line-height: ${(props) => (props.lineHeight ? `${props.lineHeight}rem` : 'inherit')};

  &.mobile {
    font-size: 1.5rem;
    font-family: 'PretendardBold';
  }
`;

export function H1({ children, display, size, weight, color = 'black', font, margin, lineHeight, className }: H1Props) {
  const CommonProps = { display, size, weight, color, font, margin, lineHeight };
  return (
    <StyledH1 {...CommonProps} className={className}>
      {children}
    </StyledH1>
  );
}
