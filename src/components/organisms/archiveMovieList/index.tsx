import React from 'react';
import { FlexContainer } from '@atoms';
import { MovieBox } from '@organisms/movieBox';
import { Pagination } from '@molecules';
import { MovieInfo } from 'src/models/movie';
import { useRecoilValue } from 'recoil';
import { movieState } from '../../../recoil/movies';

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  movies: MovieInfo[];
}

export function ArchiveMovieList({ page, setPage, movies }: Props) {
  const limit = 12;
  const offset = (page - 1) * limit;

  return (
    <>
      <FlexContainer width={1282} margin="0 auto" wrap="wrap">
        {movies.slice(offset, offset + limit).map((movie) => (
          <MovieBox
            key={movie.id}
            id={movie.id}
            type="archive"
            title={movie.title}
            director={movie.director}
            country={movie.country}
            year={movie.year}
            runningTime={movie.runningTime}
            url={movie.url}
          />
        ))}
      </FlexContainer>
      <Pagination total={movies.length} limit={limit} page={page} setPage={setPage} />
    </>
  );
}
