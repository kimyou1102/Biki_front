import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
  color?: string;
  url?: string;
  id?: string;
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
`;

export function A({ url, color, children, id }: Props) {
  return (
    <StyledLink to={url || '/'} color={color} id={id}>
      {children}
    </StyledLink>
  );
}
