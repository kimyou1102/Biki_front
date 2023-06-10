import styled from 'styled-components';

export const MainListSection = styled.div<{ bottom?: number }>`
  width: calc(1280px * 0.8);
  margin: auto;
  margin-bottom: ${(props) => (props.bottom ? `calc(${props.bottom}px * 0.8)` : 'calc(117px * 0.8)')};
`;
