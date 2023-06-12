import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  display?: string;
  margin?: string;
  padding?: string;
  bgcolor?: string;
  overflowx?: string;
}

export const Div = styled.div<Props>`
  display: ${(props) => (props.display ? props.display : 'block')};
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
  width: ${(props) => (props.width ? `calc(${props.width}px * 0.8)` : 'auto')};
  height: ${(props) => (props.height ? `calc(${props.height}px * 0.8)` : 'auto')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : 'transparent')};
  box-sizing: border-box;
  overflow-x: ${(props) => (props.overflowx ? props.overflowx : 'visible')};
`;
