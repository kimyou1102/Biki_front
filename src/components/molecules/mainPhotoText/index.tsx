import React from 'react';
import styled from 'styled-components';
import { Text, FlexContainer } from '@atoms';

interface TextProps {
  sub?: string;
  title?: string;
  date?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

export function MainPhotoText({ sub, title, date }: TextProps) {
  return (
    // <FlexContainer direction="column" align="center" position="absolute" left={132} bottom={124}>
    <Container>
      <Text color="white" weight="bold" size={2.5}>
        {sub}
      </Text>
      <Text color="white" weight="bold" size={3.5} margin="12px 0px 23px 0px">
        {title}
      </Text>
      <Text color="var(--main-slide-text-color)" weight="bold" size={2}>
        {date}
      </Text>
    </Container>
    // </FlexContainer>
  );
}
