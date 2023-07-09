import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { Span, StyledStrong, ContentDescriptionWrap, MobileContentDescriptionWrap } from '@atoms';
import { MovieDescriptionInfo } from '../../../../models/movie';
import { languageState } from '../../../../store/language/atom';

export function MovieDescription({ type, title, director, country, year, runningTime }: MovieDescriptionInfo) {
  const { t } = useTranslation();

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  return isMobile ? (
    <MobileContentDescriptionWrap type={type} className="normal">
      <StyledStrong size={0.75 / 0.8} color={type === 'main' ? 'white' : 'black'}>
        {title}
      </StyledStrong>
      <Span size={0.625 / 0.8} color={type === 'main' ? 'white' : '#767676'} margin="5px 0px 0px 0px">
        {director} | {country} | {year} | {runningTime}
        {t(`movie.minute`)}
      </Span>
    </MobileContentDescriptionWrap>
  ) : (
    <ContentDescriptionWrap type={type} className="normal">
      <StyledStrong color={type === 'main' ? 'white' : 'black'}>{title}</StyledStrong>
      <Span color={type === 'main' ? 'white' : '#767676'} margin="5px 0px 0px 0px">
        {director} | {country} | {year} | {runningTime}
        {t(`movie.minute`)}
      </Span>
    </ContentDescriptionWrap>
  );
}
