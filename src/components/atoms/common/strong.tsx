import styled from 'styled-components';

interface Props {
  color?: string;
  size?: number;
}

export const StyledStrong = styled.strong<Props>`
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: ${(props) => (props.size ? `${props.size}rem` : '1.25rem')};
  font-weight: bold;
`;
