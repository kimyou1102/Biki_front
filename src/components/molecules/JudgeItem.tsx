import React from 'react';
import styled from 'styled-components';
import { Img, H1, Span, Text, FlexContainer } from '@atoms';

interface Props {
  src: string;
  name: string;
  career: string;
  awards: string;
}

const StyledLi = styled.li``;

export function JudgeItem({ src, name, career, awards }: Props) {
  return (
    <StyledLi>
      <FlexContainer align="center">
        <Img
          src={src}
          alt="심사위원"
          width={197}
          height={197}
          radius="50%"
          objectFit="cover"
          margin="0 calc(20px * 0.8) 0 0"
        />
        <FlexContainer direction="column">
          <Text weight="bold">{name}</Text>
          <Text margin="calc(16px * 0.8) 0 calc(8px * 0.8) 0">{career}</Text>
          <Text>{awards}</Text>
        </FlexContainer>
      </FlexContainer>
    </StyledLi>
  );
}
