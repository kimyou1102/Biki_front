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
  bgcolor?: string;
  weight?: string | number;
  font?: string;
  display?: string;
  justify?: string;
  align?: string;
  zindex?: number;
  onClick?: (e: any) => void;
}

const StyledButton = styled.button<ButtonProps>`
  border: ${(props) => (props.border === 'none' ? 'none' : `1px solid ${props.border}`)};
  background: ${(props: ButtonProps) => (props.bgcolor ? props.bgcolor : 'transparent')};
  /* width: ${(props) => (props.width ? `calc(${props.width}px * 0.8)` : 'auto')}; */
  width: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.width ? (typeof props.width === 'string' ? props.width : `calc(${props.width}px * 0.8)`) : 'auto'};
  height: ${(props) => (props.height ? `calc(${props.height}px * 0.8)` : 'auto')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  border-radius: ${(props) => (props.radius ? props.radius : '0px')};
  color: ${(props: ButtonProps) => props.color};
  cursor: pointer;
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  font-size: ${(props) => (props.size ? `${props.size * 0.8}rem` : '1rem')};
  display: ${(props) => (props.display ? props.display : 'inline-block')};
  justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
  align-items: ${(props) => (props.align ? props.align : 'flex-start')};
  z-index: ${(props) => (props.zindex ? props.zindex : 0)};
  &.right-none {
    margin-right: 0px;
  }

  &.full {
    width: 100%;
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
  padding,
  radius,
  color,
  border = 'none',
  bgcolor,
  weight,
  display,
  justify,
  align,
  zindex,
  onClick,
}: ButtonProps) {
  const CommonProps = {
    type,
    size,
    color,
    width,
    height,
    margin,
    padding,
    radius,
    border,
    bgcolor,
    weight,
    display,
    justify,
    align,
    zindex,
    onClick,
  };
  return (
    <StyledButton {...CommonProps} className={className}>
      {children}
    </StyledButton>
  );
}
