import styled from 'styled-components';

interface Props {
  color?: string;
  size?: number;
  font?: string;
  margin?: string;
  display?: string;
}

export const StyledStrong = styled.strong<Props>`
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: ${(props) => (props.size ? `${props.size * 0.8}rem` : '1rem')};
  font-weight: bold;
  font-family: ${(props) => (props.font ? `${props.font}` : 'PretendardRegular')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
  display: ${(props) => (props.display ? props.display : 'inline-block')};
`;
