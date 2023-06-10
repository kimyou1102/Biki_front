import React from 'react';
import { Span } from '@atoms';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  color: string;
}

const SignupTitleBox = styled.div<{ color: string }>`
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: calc(32px * 0.8);
  border: none;
  background: ${(props) => props.color};
  width: auto;
  height: calc(70px * 0.8);
  border-radius: 16px;
`;

export function SingupTitleBox({ color, children }: Props) {
  return (
    <SignupTitleBox color={color}>
      <Span size={1.25} color="white" weight="bold">
        {children}
      </Span>
    </SignupTitleBox>
  );
}
