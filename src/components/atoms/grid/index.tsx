import styled from 'styled-components';

interface Props {
  templateColumns?: string;
  gap?: string;
  width?: number | string;
  height?: number | string;
  margin?: string;
  padding?: string;
  bgColor?: string;
}

export const Grid = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(props) => (props.templateColumns ? props.templateColumns : '0px')};
  gap: ${(props) => (props.gap ? props.gap : '0px')};
  margin: ${(props) => (props.margin ? props.margin : '0 auto')};
  width: ${(props) => (props.width ? `calc(${props.width}px * 0.8)` : 'auto')};
  height: ${(props) => (props.height ? `calc(${props.height}px * 0.8)` : 'auto')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
  box-sizing: border-box;
`;
