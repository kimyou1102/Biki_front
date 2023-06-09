import React from 'react';
import styled from 'styled-components';

interface ImgProps {
  alt: string;
  width?: number | string;
  height?: number | string;
  margin?: string;
  src?: string;
  position?: string;
  objectfit?: string;
  radius?: string;
}

const StyledImg = styled.img<ImgProps>`
  width: ${(props) => (props.width ? `calc(${props.width}px * 0.8)` : '100%')};
  height: ${(props) => (props.height ? `calc(${props.height}px * 0.8)` : '100%')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  position: ${(props) => (props.position ? props.position : 'relative')};
  object-fit: ${(props) => (props.objectfit ? props.objectfit : 'fill')};
  border-radius: ${(props) => (props.radius ? props.radius : '0px')};
`;

export function Img({ alt, src, width, height, margin, position, objectfit, radius }: ImgProps) {
  const CommonProps = {
    width,
    height,
    margin,
    position,
    objectfit,
    radius,
  };
  return <StyledImg alt={alt} src={src} {...CommonProps} />;
}
