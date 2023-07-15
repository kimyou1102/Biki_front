import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { useRecoilState } from 'recoil';
import { Section, H3, FlexContainer } from '@atoms';
import { Header, ArchiveTitle, SearchFilter } from '@molecules';
import { Nav, ArchiveMovieSection } from '@organisms';
import { Helmet } from 'react-helmet-async';
import { MovieData } from '../../../models/movie';
import { SketchProps } from '../../../models/sketch';
import { pageState } from '../../../store/archive/atome';

interface Props {
  children: React.ReactNode;
  title?: string;
  type: string;
  pageTitle?: string;
  sub?: string;
  id?: number;
}

export function ArchiveTemplate({ children, title, type, id, pageTitle, sub }: Props) {
  const [page, setPage] = useRecoilState<number>(pageState);

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Section>
        <ArchiveTitle pageTitle={pageTitle} sub={sub} />
        {isMobile ? (
          <FlexContainer className="full" margin="0px 0px 26px 0px" direction="column">
            {title ? (
              <H3 size={1 / 0.8} weight="bold" color={pageTitle ? 'var(--main-color)' : 'black'} margin="0 0 8px 0">
                {title}
              </H3>
            ) : null}
            {type !== 'online' && <SearchFilter type={type} id={id} />}
          </FlexContainer>
        ) : (
          <FlexContainer className="full" margin="0px 0px 26px 0px" justify="space-between" align="center">
            {title ? (
              <H3 size={2} weight="bold" color={pageTitle ? 'var(--main-color)' : 'black'}>
                {title}
              </H3>
            ) : null}
            {/* <H3 size={2} weight="bold" color={pageTitle ? 'var(--main-color)' : 'black'}>
            {title}
          </H3> */}
            {type !== 'online' && <SearchFilter type={type} id={id} />}
          </FlexContainer>
        )}

        {children}
        {/* <ArchiveMovieSection data={data} page={page} setPage={setPage} /> */}
      </Section>
    </>
  );
}
