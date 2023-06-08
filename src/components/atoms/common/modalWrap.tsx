import React from 'react';
import styled from 'styled-components';

export const ModalWrap = styled.div<{ top?: number }>`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: ${(props) => (props.top ? `${props.top}px` : '0px')};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);

  &.none {
    display: none;
  }
`;
