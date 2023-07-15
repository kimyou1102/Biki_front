import React from 'react';
import { FlexContainer, H3, More, A } from '@atoms';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';

interface NoticeHeaderProps {
  title: string;
  url: string;
}

export function NoticeHeader({ title, url }: NoticeHeaderProps) {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return (
    <FlexContainer justify="space-between" align="baseline" margin="0px 0px 6px 0px">
      <H3 size={isMobile ? 1.5 / 0.8 : 2.5} weight="bold" font="PretendardMedium" lineheight={3}>
        {title}
      </H3>
      <More>
        <A url={url}>{t(`main.more`)}</A>
      </More>
    </FlexContainer>
  );
}
