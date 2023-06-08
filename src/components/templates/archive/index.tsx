import React from 'react';
import { Section, H3, FlexContainer } from '@atoms';
import { Nav } from '@organisms';
import { Header, ArchiveTitle, SearchFilter } from '@molecules';

// footer까지 추가하면됨
interface Props {
  children: React.ReactNode;
  title: string;
  type: string;
}

export function ArchiveTemplate({ children, title, type }: Props) {
  return (
    <Section>
      <ArchiveTitle />
      <FlexContainer className="full" margin="0px 0px 26px 0px" justify="space-between" align="center">
        <H3 size={2} weight="bold">
          {title}
        </H3>
        <SearchFilter type={type} />
      </FlexContainer>
      {children}
    </Section>
  );
}
