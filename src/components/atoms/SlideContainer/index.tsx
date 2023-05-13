import React, { forwardRef } from 'react';
import { FlexContainer } from '@atoms/common';

interface PropsType {
  children: React.ReactNode;
}

export const SlideContainer = forwardRef((props: PropsType, ref: any) => {
  return (
    <FlexContainer ref={ref} overflowX="auto" direction="row" className="slide">
      {props.children}
    </FlexContainer>
  );
});
