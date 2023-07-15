import React from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { H1, Span } from '@atoms';

interface Props {
  title: string;
}

export function NewsTitle({ title }: Props) {
  const { t } = useTranslation();
  const headers: any = t(`header`, { returnObjects: true });
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return (
    <div>
      <H1
        display="inline-block"
        className={isMobile ? 'mobile' : ''}
        size={2.5}
        weight="bold"
        margin="0px 13px 0px 0px"
      >
        {title}
      </H1>
      <Span size={1.25} weight="bold">
        {headers[7].title}
      </Span>
      <hr style={{ height: '1px', background: '#74B743', border: 'none' }} />
    </div>
  );
}
