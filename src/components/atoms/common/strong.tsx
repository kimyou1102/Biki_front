import styled from 'styled-components';

interface Props {
  color?: string;
}

export const StyledStrong = styled.strong<Props>`
  color: ${(props) => (props.color ? props.color : 'white')};
  font-size: 1.25rem;
  font-weight: bold;
`;
