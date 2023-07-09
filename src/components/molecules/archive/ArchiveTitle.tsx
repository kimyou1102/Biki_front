import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { H1, Span, FlexContainer } from '@atoms';

interface Props {
  pageTitle?: string;
  sub?: string;
}

export function ArchiveTitle({ pageTitle, sub }: Props) {
  const { t } = useTranslation();

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return (
    <FlexContainer align="baseline">
      <H1
        size={2.5}
        weight="bold"
        margin={isMobile ? '0px 16px 16px 0px' : '0px 19px 32px 0px'}
        className={isMobile ? 'mobile' : ''}
        font="PretendardBold"
      >
        {pageTitle || t(`archive.title`)}
      </H1>
      <Span size={isMobile ? 0.75 / 0.8 : 1.5} weight="bold">
        {sub || t(`archive.subTitle`)}
      </Span>
    </FlexContainer>
  );
}
