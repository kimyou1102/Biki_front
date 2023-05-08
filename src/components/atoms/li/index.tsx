import React from 'react';
import styled from 'styled-components';

interface LiProps {
  children?: React.ReactNode;
  color?: string;
  outline?: string;
  bgColor?: string;
  weight?: string | number;
  padding?: string;
  onClick?: (e: any) => void;
}

const StyledLi = styled.li<LiProps>`
  border-bottom: ${(props) => (props.outline === 'none' ? 'none' : `1px solid ${props.outline}`)};
  color: ${(props: LiProps) => props.color};
  cursor: pointer;
  font-weight: ${(props) => (props.weight ? props.weight : 'normal')};
  outline: none;
  font-size: 1.25rem;
  padding: ${(props) => (props.padding ? props.padding : '0px')};
`;

export function Li({ children, color = 'black', outline = 'none', bgColor, weight, padding, onClick }: LiProps) {
  const CommonProps = {
    color,
    outline,
    bgColor,
    weight,
    onClick,
    padding,
  };
  return <StyledLi {...CommonProps}>{children}</StyledLi>;
}
