import React from 'react';
import styled from 'styled-components';

interface LiProps {
  children?: React.ReactNode;
  color?: string;
  outline?: string;
  bgcolor?: string;
  weight?: string | number;
  padding?: string;
  margin?: string;
  onClick?: (e: any) => void;
  id?: string;
  width?: string;
  size?: number;
}

const StyledLi = styled.li<LiProps>`
  border-bottom: ${(props) => (props.outline === 'none' ? 'none' : `1px solid ${props.outline}`)};
  color: ${(props: LiProps) => props.color};
  cursor: pointer;
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  outline: none;
  font-size: ${(props) => (props.size ? `${props.size}rem` : '1rem')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  width: ${(props) => (props.width ? props.width : 'auto')};
`;

export function Li({
  children,
  color = 'black',
  outline = 'none',
  bgcolor,
  weight,
  padding,
  onClick,
  id,
  margin,
  width,
  size,
}: LiProps) {
  const CommonProps = {
    color,
    outline,
    bgcolor,
    weight,
    onClick,
    padding,
    id,
    margin,
    width,
    size,
  };
  return (
    <StyledLi {...CommonProps} id={id}>
      {children}
    </StyledLi>
  );
}
