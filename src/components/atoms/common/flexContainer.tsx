import styled from 'styled-components';

interface Props {
  width?: number | string;
  height?: number | string;
  direction?: 'column' | 'row';
  justify?: string;
  align?: string;
  margin?: string;
  padding?: string;
  bgColor?: string;
  overflowX?: string;
  position?: string;
  left?: number;
  bottom?: number;
}

export const FlexContainer = styled.div<Props>`
  display: flex;
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
  align-items: ${(props) => (props.align ? props.align : 'flex-start')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'transparent')};
  box-sizing: border-box;
  position: ${(props) => (props.position ? props.position : 'relative')};
  left: ${(props) => (props.left ? `${props.left}px` : '0px')};
  bottom: ${(props) => (props.bottom ? `${props.bottom}px` : '0px')};
  overflow-x: ${(props) => (props.overflowX ? props.overflowX : 'visible')};
  &.slide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &.slide::-webkit-scrollbar {
    display: none;
  }
`;
