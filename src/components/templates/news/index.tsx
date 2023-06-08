import React from 'react';
import { Section } from '@atoms';
import { Nav } from '@organisms';
import { Header, NewsTitle } from '@molecules';

interface Props {
  children: React.ReactNode;
  title: string;
}

export function NewsTemplates({ children, title }: Props) {
  return (
    <Section>
      <NewsTitle title={title} />
      {children}
    </Section>
  );
}
