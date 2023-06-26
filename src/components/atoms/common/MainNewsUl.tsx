import React from 'react';
import styled from 'styled-components';

export const MainNewsUl = styled.ul<{ type: string }>`
  padding: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.type !== 'notice' ? (props.type === 'mobile' ? '8px 22px' : '0px') : 'calc(26px * 0.8) calc(48px * 0.8)'};
  /* display: grid; */
  display: ${(props) => (props.type === 'notice' ? 'grid' : 'block')};
  grid-template-columns: ${(props) => (props.type === 'notice' ? '1fr 1fr' : '1fr')};
  column-gap: 10px;
  box-sizing: ${(props) => (props.type === 'notice' ? 'content-box' : 'border-box')};
`;
