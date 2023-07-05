import React from 'react';
import { Section } from '@atoms';
import { Nav } from '@organisms';
import { Header, NewsTitle } from '@molecules';
import { Helmet } from 'react-helmet-async';

interface Props {
  children: React.ReactNode;
  title: string;
}

export function NewsTemplates({ children, title }: Props) {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Section>
        <NewsTitle title={title} />
        {children}
      </Section>
    </>
  );
}
