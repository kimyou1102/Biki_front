import React, { ForwardedRef, forwardRef } from 'react';
import { FlexContainer } from '@atoms/common';

interface PropsType {
  children: React.ReactNode;
}

export const SlideContainer = forwardRef((props: PropsType, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <FlexContainer ref={ref} overflowx="auto" direction="row" className="slide">
      {props.children}
    </FlexContainer>
  );
});
