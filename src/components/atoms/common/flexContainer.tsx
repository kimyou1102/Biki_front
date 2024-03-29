import styled from 'styled-components';

interface Props {
  width?: number | string;
  height?: number | string;
  direction?: 'column' | 'row';
  justify?: string;
  align?: string;
  margin?: string;
  padding?: string;
  bgcolor?: string;
  overflowx?: string;
  position?: string;
  left?: number;
  bottom?: number;
  wrap?: string;
  radius?: string;
  onClick?: () => void;
  gap?: string;
}

export const FlexContainer = styled.div<Props>`
  display: flex;
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  /* width: ${(props) => (props.width ? `calc(${props.width}px * 0.8)` : 'auto')}; */
  width: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.width ? (typeof props.width === 'string' ? props.width : `calc(${props.width}px * 0.8)`) : 'auto'};

  height: ${(props) => (props.height ? `calc(${props.height}px * 0.8)` : 'auto')};
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  flex-wrap: ${(props) => (props.wrap ? props.wrap : 'nowrap')};
  justify-content: ${(props) => (props.justify ? props.justify : 'flex-start')};
  align-items: ${(props) => (props.align ? props.align : 'flex-start')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : 'transparent')};
  box-sizing: border-box;
  position: ${(props) => (props.position ? props.position : 'relative')};
  bottom: ${(props) => (props.bottom ? `calc(${props.bottom}px * 0.8)` : '0px')};
  left: ${(props) => (props.left ? `calc(${props.left}px * 0.8)` : '0px')};
  overflow-x: ${(props) => (props.overflowx ? props.overflowx : 'visible')};
  border-radius: ${(props) => (props.radius ? props.radius : '0px')};
  gap: ${(props) => (props.gap ? props.gap : '0px')};

  &.slide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  &.slide::-webkit-scrollbar {
    display: none;
  }
  &.full {
    width: 100%;
  }
  &.cursor {
    cursor: pointer;
  }
`;
