import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './button';

interface Props extends ButtonProps {
  position?: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  transform?: string;
}

const StyledButton = styled.button<Props>`
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
  position: ${(props) => (props.position ? props.position : 'relative')};
  z-index: ${(props) => (props.zIndex ? props.zIndex : 0)};
  transform: ${(props) => (props.transform ? props.transform : 'none')};
  &.right-none {
    margin-right: 0px;
  }

  &.top {
    top: ${(props) => (props.top ? props.top : '0px')};
  }

  &.bottom {
    bottom: ${(props) => (props.bottom ? props.bottom : '0px')};
  }

  &.right {
    right: ${(props) => (props.right ? props.right : '0px')};
  }

  &.left {
    left: ${(props) => (props.left ? props.left : '0px')};
  }
`;

export function AbsoluteButton({
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
  position,
  top,
  bottom,
  right,
  left,
  transform,
  onClick,
}: Props) {
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
    position,
    top,
    bottom,
    right,
    left,
    transform,
    onClick,
  };
  return (
    <StyledButton {...CommonProps} className={className}>
      {children}
    </StyledButton>
  );
}
