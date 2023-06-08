import styled from 'styled-components';

export const MainListSection = styled.div<{ bottom?: number }>`
  width: calc(100% - ((100% - 1024px) / 2));
  margin: 0 0 0 auto;
  margin-bottom: ${(props) => (props.bottom ? `calc(${props.bottom}px * 0.8)` : 'calc(117px * 0.8)')};
`;
