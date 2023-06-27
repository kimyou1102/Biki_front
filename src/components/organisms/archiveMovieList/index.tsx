import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { FlexContainer, Grid } from '@atoms';
import { MovieBox } from '@organisms/movieBox';
import { Pagination } from '@molecules';
import { MovieInfo, MovieData } from 'src/models/movie';
import { useRecoilValue } from 'recoil';
import { movieState } from '../../../recoil/movies';

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  movies: MovieData[];
}

export function ArchiveMovieList({ page, setPage, movies }: Props) {
  const limit = 12;
  const offset = page * limit;
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return isMobile ? (
    <>
      <FlexContainer wrap="wrap">
        <Grid margin="0px" templatecolumns="1fr 1fr" gap="21px 8px">
          {movies.slice(offset, offset + limit).map((movie) => (
            <MovieBox key={movie.id} type="archive" data={movie} />
          ))}
        </Grid>
      </FlexContainer>
      <Pagination total={movies.length} limit={limit} page={page} setPage={setPage} />
    </>
  ) : (
    <>
      <FlexContainer width={1280} margin="0 auto" wrap="wrap">
        <Grid templatecolumns="1fr 1fr 1fr" gap="21px 16px">
          {movies.slice(offset, offset + limit).map((movie) => (
            <MovieBox key={movie.id} type="archive" data={movie} />
            // <MovieBox
            //   key={movie.id}
            //   id={movie.id}
            //   type="archive"
            //   title={movie.titleKo}
            //   director={movie.credit.directorNameKo}
            //   country={movie.country}
            //   year={movie.eventYear}
            //   runningTime={movie.runningTime}
            //   url={movie.stillImage.first}
            // />
          ))}
        </Grid>
      </FlexContainer>
      <Pagination total={movies.length} limit={limit} page={page} setPage={setPage} />
    </>
  );
}
