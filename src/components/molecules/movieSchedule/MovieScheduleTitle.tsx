import React from 'react';
import { useTranslation } from 'react-i18next';
import { Div, H1, Span } from '@atoms';

export function MovieScheduleTitle() {
  const { t } = useTranslation();

  return (
    <Div margin="0 0 1rem 0">
      <H1 display="inline-block" size={2.5} weight="bold" margin="0px 13px 0px 0px">
        {t(`screening.schedule`)}
      </H1>
      <Span size={1.25} weight="bold">
        {t(`screening.title`)}
      </Span>
    </Div>
  );
}
