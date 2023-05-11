import styled from 'styled-components';

interface Props {
  width?: number;
  height?: number;
  radius?: number;
  bgColor?: string;
  border?: string;
}

export const BorderContainer = styled.div<Props>`
  width: ${(props) => (props.width ? `calc(${props.width}px * 0.8)` : '100%')};
  height: ${(props) => (props.height ? `calc(${props.height}px * 0.8)` : '320px')};
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : '0px')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
  border: ${(props) => (props.border ? `1px solid ${props.border}` : 'none')};
`;
