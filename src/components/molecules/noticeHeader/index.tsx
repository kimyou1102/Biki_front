import React from 'react';
import { FlexContainer, H3, More, A } from '@atoms';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';

interface NoticeHeaderProps {
  title: string;
  url: string;
}

export function NoticeHeader({ title, url }: NoticeHeaderProps) {
  const { t } = useTranslation();

  return (
    <FlexContainer justify="space-between" align="baseline" margin="0px 0px 6px 0px">
      <H3 size={2.5} weight="bold" font="PretendardMedium" lineheight={3}>
        {title}
      </H3>
      <More>
        <A url={url}>{t(`main.more`)}</A>
      </More>
    </FlexContainer>
  );
}
