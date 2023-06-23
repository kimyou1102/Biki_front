import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { Span, StyledStrong, ContentDescriptionWrap } from '@atoms';
import { MovieDescriptionInfo } from '../../../models/movie';
import { languageState } from '../../../recoil/language/atom';

export function MovieDescription({ type, title, director, country, year, runningTime }: MovieDescriptionInfo) {
  const { t } = useTranslation();

  return (
    <ContentDescriptionWrap type={type} className="normal">
      <StyledStrong color={type === 'main' ? 'white' : 'black'}>{title}</StyledStrong>
      <Span color={type === 'main' ? 'white' : '#767676'} margin="5px 0px 0px 0px">
        {director} | {country} | {year} | {runningTime}
        {t(`movie.minute`)}
      </Span>
    </ContentDescriptionWrap>
  );
}
