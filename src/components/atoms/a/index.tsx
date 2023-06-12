import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  color?: string;
  url?: string;
  id?: string;
  className?: string;
}

const StyledLink = styled(Link)<Props>`
  color: ${(props) => (props.color ? props.color : 'black')};

  &:link {
    color: ${(props) => (props.color ? props.color : 'black')};
  }
  &:active {
    color: ${(props) => (props.color ? props.color : 'black')};
  }
  &:alink {
    color: ${(props) => (props.color ? props.color : 'black')};
  }
  &:visited {
    color: ${(props) => (props.color ? props.color : 'black')};
  }

  &.cursor {
    cursor: pointer;
  }
`;

export function A({ url, color, children, id, className }: Props) {
  return (
    <StyledLink to={url || '/'} color={color} id={id} className={className}>
      {children}
    </StyledLink>
  );
}
