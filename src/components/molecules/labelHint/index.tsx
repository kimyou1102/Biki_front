import { Div } from '@atoms';
import React from 'react';
import { styled } from 'styled-components';

interface LeftLabelProps {
  bgColor: string;
}

interface LabelHintProps {
  bgColor: string;
  leftText: string;
  rightText: string;
}

const LeftLabelDiv = styled.div<LeftLabelProps>`
  width: 40%;
  height: 3rem;
  border-radius: 1rem 0 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PretendardBold';
  font-size: 0.9rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#FFFFFF')};
  color: white;
`;

const RightLabelDiv = styled.div`
  width: 60%;
  height: 3rem;
  border-radius: 0 1rem 1rem 0;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PretendardBold';
  font-size: 0.9rem;
`;

export function LabelHint({ bgColor, leftText, rightText }: LabelHintProps) {
  return (
    <Div display="flex" margin="0 0 1rem 0" style={{ width: '100%' }}>
      <LeftLabelDiv bgColor={bgColor}>{leftText}</LeftLabelDiv>
      <RightLabelDiv>{rightText}</RightLabelDiv>
    </Div>
  );
}
