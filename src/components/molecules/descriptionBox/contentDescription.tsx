import React from 'react';
import { FlexContainer, Span, StyledStrong, ContentDescriptionWrap } from '@atoms';
import { ContentDescriptionInfo } from 'src/models/content';

export function ContentDescription({ title, date, count, type }: ContentDescriptionInfo) {
  return (
    // <FlexContainer
    //   bgColor={type === 'main' ? 'var(--main-color)' : '#EEEEEE'}
    //   width={type === 'main' ? 630 : 413}
    //   height={type === 'main' ? 96 : 85}
    //   padding={type === 'main' ? '13px' : '19px'}
    //   direction="column"
    // >
    <ContentDescriptionWrap type={type} className={type === 'main' ? 'big' : 'small'}>
      <StyledStrong size={type === 'main' ? 1.25 : 1} color={type === 'main' ? 'white' : 'black'}>
        {title}
      </StyledStrong>
      <FlexContainer justify="space-between" margin="6px 0px 0px 0px" className="full">
        <Span color={type === 'main' ? 'white' : 'black'} size={type === 'main' ? 1 : 0.75}>
          등록일: {date}
        </Span>
        <Span color={type === 'main' ? 'white' : 'black'} size={type === 'main' ? 1 : 0.75}>
          조회수 : {count}
        </Span>
      </FlexContainer>
    </ContentDescriptionWrap>
    // </FlexContainer>
  );
}
