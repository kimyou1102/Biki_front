import styled from 'styled-components';

interface Props {
  width?: number;
  heigth?: number;
  radius?: number;
  bgColor?: string;
  border?: string;
}

export const BorderContainer = styled.div<Props>`
  height: ${(props) => (props.heigth ? `${props.heigth}px` : '400px')};
  width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : '0px')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
  border: ${(props) => (props.border ? `1px solid ${props.border}` : 'none')};
`;
