import React from 'react';
import styled from 'styled-components';
import { Span, Input } from '@atoms';

interface Props {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType?: string;
}

const Wrap = styled.div`
  display: grid;
  gap: calc(8px * 0.8);
`;

export function SignupInput({ label, placeholder, value, onChange, inputType = 'text' }: Props) {
  return (
    <Wrap>
      <Span color="#191919" weight="bold">
        {label}
      </Span>
      <Input
        required
        border="none"
        radius="16px"
        width="100%"
        height={60}
        placeholder={placeholder}
        padding="0 0 0 calc(16px * 0.8)"
        value={value}
        onChange={onChange}
        type={inputType}
      />
    </Wrap>
  );
}
