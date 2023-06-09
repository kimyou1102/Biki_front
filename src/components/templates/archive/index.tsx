import React from 'react';
import { Section, H3, FlexContainer } from '@atoms';
import { Header, ArchiveTitle, SearchFilter } from '@molecules';
import { Nav, ArchiveMovieSection } from '@organisms';
import { Footer } from '@layout/Footer';
import { MovieData } from '../../../models/movie';
import { SketchProps } from '../../../models/sketch';

// footer까지 추가하면됨
interface Props {
  children: React.ReactNode;
  title: string;
  type: string;
  pageTitle?: string;
  sub?: string;
}

export function ArchiveTemplate({ children, title, type, pageTitle, sub }: Props) {
  return (
    <>
      <Section>
        <ArchiveTitle pageTitle={pageTitle} sub={sub} />
        <FlexContainer className="full" margin="0px 0px 26px 0px" justify="space-between" align="center">
          <H3 size={2} weight="bold">
            {title}
          </H3>
          <SearchFilter type={type} />
        </FlexContainer>
        {children}
        {/* <ArchiveMovieSection data={data} page={page} setPage={setPage} /> */}
      </Section>
      <Footer />
    </>
  );
}
