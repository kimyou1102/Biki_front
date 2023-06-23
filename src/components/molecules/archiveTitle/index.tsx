import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { H1, Span, FlexContainer } from '@atoms';

interface Props {
  pageTitle?: string;
  sub?: string;
}

export function ArchiveTitle({ pageTitle, sub }: Props) {
  const { t } = useTranslation();

  return (
    <FlexContainer align="baseline">
      <H1 size={2.5} weight="bold" margin="0px 19px 32px 0px">
        {pageTitle || t(`archive.title`)}
      </H1>
      <Span size={1.5} weight="bold">
        {sub || t(`archive.subTitle`)}
      </Span>
    </FlexContainer>
  );
}
