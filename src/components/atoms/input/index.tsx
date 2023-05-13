import React from 'react';
import styled from 'styled-components';
import search from '../../../assets/images/Search.png';

interface InputProps {
  width?: number | string;
  height?: number | string;
  padding?: string;
  position?: string;
  radius?: string;
  size?: number;
  placeholder?: string;
  value: string;
  border?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<InputProps>`
  width: ${(props) => (props.width ? `calc(${props.width}px * 0.8)` : 'auto')};
  height: ${(props) => (props.height ? `calc(${props.height}px * 0.8)` : 'auto')};
  border-radius: ${(props) => (props.radius ? props.radius : '0px')};
  border: ${(props) => (props.border === 'none' ? 'none' : `1px solid ${props.border}`)};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  position: ${(props) => (props.position ? props.position : 'relative')};
  font-size: ${(props) => (props.size ? `${props.size}rem` : '1rem')};
  font-weight: bold;
  box-sizing: border-box;
  outline: none;
`;

export function Input({
  width,
  height,
  padding,
  position,
  radius,
  size,
  placeholder = '',
  border,
  value,
  onChange,
}: InputProps) {
  const CommonProps = { width, height, padding, position, radius, size, value, border };
  return <StyledInput type="text" {...CommonProps} placeholder={placeholder} onChange={onChange} />;
}