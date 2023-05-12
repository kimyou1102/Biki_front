import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  size?: number;
  width?: number | string;
  height?: number | string;
  margin?: string;
  padding?: string;
  radius?: string;
  color?: string;
  border?: string;
  bgColor?: string;
  weight?: string | number;
  font?: string;
  display?: string;
  justify?: string;
  align?: string;
  zIndex?: number;
  onClick?: (e: any) => void;
}

const StyledButton = styled.button<ButtonProps>`
  border: ${(props) => (props.border === 'none' ? 'none' : `1px solid ${props.border}`)};
  background: ${(props: ButtonProps) => (props.bgColor ? props.bgColor : 'transparent')};
  width: ${(props) => (props.width ? `calc(${props.width}px * 0.8)` : 'auto')};
  height: ${(props) => (props.height ? `calc(${props.height}px * 0.8)` : 'auto')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  border-radius: ${(props) => (props.radius ? props.radius : '0px')};
  color: ${(props: ButtonProps) => props.color};
  cursor: pointer;
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  font-size: ${(props) => (props.size ? `${props.size}rem` : '1rem')};
  display: ${(props) => (props.display ? props.display : 'inline-block')};
  justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
  align-items: ${(props) => (props.align ? props.align : 'flex-start')};
  z-index: ${(props) => (props.zIndex ? props.zIndex : 0)};
  &.right-none {
    margin-right: 0px;
  }
`;

export function Button({
  children,
  className,
  type,
  size,
  width,
  height,
  margin,
  radius,
  color,
  border = 'none',
  bgColor,
  weight,
  display,
  justify,
  align,
  zIndex,
  onClick,
}: ButtonProps) {
  const CommonProps = {
    type,
    size,
    color,
    width,
    height,
    margin,
    radius,
    border,
    bgColor,
    weight,
    display,
    justify,
    align,
    zIndex,
    onClick,
  };
  return (
    <StyledButton {...CommonProps} className={className}>
      {children}
    </StyledButton>
  );
}
