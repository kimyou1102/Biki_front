import React from 'react';
import { FlexContainer, Button, A } from '@atoms';
import { ButtonsProps } from 'src/models/headerButton';
import { useNavigate } from 'react-router-dom';

interface Props {
  data: ButtonsProps[];
  color?: string;
}

export function HeaderButtons({ data, color }: Props) {
  const navigate = useNavigate();
  console.log(data);

  return (
    <FlexContainer width={246} justify="space-between">
      {data.map((button) => (
        <Button
          key={button.id}
          weight="bold"
          color={color}
          onClick={() => (button.onClick ? button.onClick() : navigate(button.url ? button.url : '/'))}
        >
          {button.name}
        </Button>
      ))}
    </FlexContainer>
  );
}
