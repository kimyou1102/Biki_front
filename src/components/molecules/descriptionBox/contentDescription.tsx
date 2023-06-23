import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { FlexContainer, Span, StyledStrong, ContentDescriptionWrap } from '@atoms';
import { ContentDescriptionInfo } from 'src/models/content';

export function ContentDescription({ title, date, count, type }: ContentDescriptionInfo) {
  const { t } = useTranslation();

  return (
    <ContentDescriptionWrap type={type} className={type === 'main' ? 'big' : 'small'}>
      <StyledStrong size={type === 'main' ? 1.25 : 1} color={type === 'main' ? 'white' : 'black'}>
        {title}
      </StyledStrong>
      <FlexContainer justify="space-between" margin="6px 0px 0px 0px" className="full">
        <Span color={type === 'main' ? 'white' : 'black'} size={type === 'main' ? 1 : 0.75}>
          {t(`registrationDate`)}: {date}
        </Span>
        <Span color={type === 'main' ? 'white' : 'black'} size={type === 'main' ? 1 : 0.75}>
          {t(`views`)} : {count}
        </Span>
      </FlexContainer>
    </ContentDescriptionWrap>
  );
}
