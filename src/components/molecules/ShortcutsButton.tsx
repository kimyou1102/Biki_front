import React from 'react';
import styled from 'styled-components';
import { Img } from '@atoms';

interface Props {
  src: string;
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  width: calc(80px * 0.8);
  height: calc(80px * 0.8);
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.45);
  cursor: pointer;
`;

export function ShortcutsButton({ src }: Props) {
  return (
    <StyledButton onClick={() => {}}>
      <Img src={src} alt="바로가기" width={40} height={40} />
    </StyledButton>
  );
}
