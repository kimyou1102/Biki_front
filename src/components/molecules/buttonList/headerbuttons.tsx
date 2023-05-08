import React from 'react';
import { FlexContainer, Button, A } from '@atoms';
import { ButtonsProps } from 'src/models/headerButton';

interface Props {
  data: ButtonsProps[];
  color?: string;
}

export function HeaderButtons({ data, color }: Props) {
  return (
    <FlexContainer width={246} justify="space-between">
      {data.map((button) => (
        <Button key={button.id} weight="bold" color={color}>
          <A url={button.url ? button.url : '/'} color={color}>
            {button.name}
          </A>
        </Button>
      ))}
    </FlexContainer>
  );
}
