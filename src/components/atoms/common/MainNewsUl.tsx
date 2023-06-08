import React from 'react';
import styled from 'styled-components';

export const MainNewsUl = styled.ul<{ type: string }>`
  padding: ${(props) => (props.type === 'notice' ? 'calc(26px * 0.8) calc(48px * 0.8)' : '0px')};
  display: grid;
  grid-template-columns: ${(props) => (props.type === 'notice' ? '1fr 1fr' : '1fr')};
  column-gap: 10px;
`;
