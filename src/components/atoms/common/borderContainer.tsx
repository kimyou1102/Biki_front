import styled from 'styled-components';

interface Props {
  display?: string;
  justify?: string;
  align?: string;
  width?: number;
  height?: number;
  radius?: number;
  bgcolor?: string;
  border?: string;
  margin?: string;
  padding?: string;
}

export const BorderContainer = styled.div<Props>`
  display: ${(props) => (props.display ? props.display : 'block')};
  justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
  align-items: ${(props) => (props.align ? props.align : 'flex-start')};
  width: ${(props) => (props.width ? `calc(${props.width}px * 0.8)` : '100%')};
  min-height: ${(props) => (props.height ? `calc(${props.height}px * 0.8)` : '320px')};
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : '0px')};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : 'transparent')};
  border: ${(props) => (props.border ? `1px solid ${props.border}` : 'none')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  box-sizing: border-box;
`;
