/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

export const ContentBoxImgWrap = styled.div<{ isMobile?: boolean; type?: string }>`
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  width: ${(props) => (props.isMobile ? (props.type === 'mobile' ? '100%' : '296px') : '330px')};
  height: 220px;
  overflow: hidden;
`;
