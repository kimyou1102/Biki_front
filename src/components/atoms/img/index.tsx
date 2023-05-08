import React from 'react';
import styled from 'styled-components';

interface ImgProps {
  alt: string;
  width?: number | string;
  height?: number | string;
  margin?: string;
  src?: string;
  position?: string;
}

const StyledImg = styled.img<ImgProps>`
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  position: ${(props) => (props.position ? props.position : 'relative')};
`;

export function Img({ alt, src, width, height, margin, position }: ImgProps) {
  const CommonProps = {
    width,
    height,
    margin,
    position,
  };
  return <StyledImg alt={alt} src={src} {...CommonProps} />;
}
