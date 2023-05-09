import React from 'react';
import { Text, FlexContainer } from '@atoms';

interface TextProps {
  sub?: string;
  title?: string;
  date?: string;
}

export function MainPhotoText({ sub, title, date }: TextProps) {
  return (
    <FlexContainer direction="column" position="absolute" left={132} bottom={124}>
      <Text color="white" weight="bold" size={2.5}>
        {sub}
      </Text>
      <Text color="white" weight="bold" size={3.5} margin="12px 0px 23px 0px">
        {title}
      </Text>
      <Text color="#F05B23" weight="bold" size={2}>
        {date}
      </Text>
    </FlexContainer>
  );
}
