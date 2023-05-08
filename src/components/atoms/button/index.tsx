import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children?: React.ReactNode;
  type?: 'button' | 'submit';
  size?: number;
  width?: number | string;
  height?: number | string;
  margin?: string;
  padding?: string;
  radius?: number;
  color?: string;
  border?: string;
  bgColor?: string;
  weight?: string | number;
  font?: string;
  display?: string;
  position?: string;
  bottom?: string;
  left?: string;
  zIndex?: number;
  transform?: string;
  onClick?: (e: any) => void;
}

const StyledButton = styled.button<ButtonProps>`
  border: ${(props) => (props.border === 'none' ? 'none' : `1px solid ${props.border}`)};
  background: ${(props: ButtonProps) => (props.bgColor ? props.bgColor : 'transparent')};
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : '0px')};
  color: ${(props: ButtonProps) => props.color};
  cursor: pointer;
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  font-size: ${(props) => (props.size ? `${props.size}rem` : '1rem')};
  display: ${(props) => (props.display ? props.display : 'inline-block')};
  position: ${(props) => (props.position ? props.position : 'relative')};
  bottom: ${(props) => (props.bottom ? props.bottom : '0px')};
  left: ${(props) => (props.left ? props.left : '0px')};
  z-index: ${(props) => (props.zIndex ? props.zIndex : 0)};
  transform: ${(props) => (props.transform ? props.transform : 'none')};
`;

export function Button({
  children,
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
  position,
  bottom,
  left,
  zIndex,
  transform,
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
    position,
    bottom,
    left,
    zIndex,
    transform,
    onClick,
  };
  return <StyledButton {...CommonProps}>{children}</StyledButton>;
}
