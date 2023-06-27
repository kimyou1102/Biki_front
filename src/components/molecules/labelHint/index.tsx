import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { styled } from 'styled-components';
import { Div } from '@atoms';

interface LeftLabelProps {
  bgcolor: string;
  isMobile: boolean;
}

interface LabelHintProps {
  bgcolor: string;
  leftText: string;
  rightText: string;
}

const LeftLabelDiv = styled.div<LeftLabelProps>`
  width: ${(props) => (props.isMobile ? '30%' : '40%')};
  height: ${(props) => (props.isMobile ? '2rem' : '3rem')};
  border-radius: 1rem 0 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PretendardBold';
  font-size: 0.9rem;
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : '#FFFFFF')};
  color: white;
`;

const RightLabelDiv = styled.div<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? '70%' : '60%')};
  height: ${(props) => (props.isMobile ? '2rem' : '3rem')};
  border-radius: 0 1rem 1rem 0;
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PretendardBold';
  font-size: 0.9rem;
`;

export function LabelHint({ bgcolor, leftText, rightText }: LabelHintProps) {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return (
    <Div display="flex" margin="0 0 1rem 0" style={{ width: '100%' }}>
      <LeftLabelDiv bgcolor={bgcolor} isMobile={isMobile}>
        {leftText}
      </LeftLabelDiv>
      <RightLabelDiv isMobile={isMobile}>{rightText}</RightLabelDiv>
    </Div>
  );
}
