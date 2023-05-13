import React, { useState } from 'react';
import { ArchiveMovieList } from '@organisms/archiveMovieList';
import { MovieInfo } from 'src/models/movie';
import { useRecoilValue } from 'recoil';
import { movieState } from '../../../recoil/movies';

export function ArchiveMovieSection() {
  const movies = useRecoilValue<MovieInfo[]>(movieState);
  const [page, setPage] = useState(1);

  return movies.length === 0 ? (
    <h1>등록된 게시물이 없습니다.</h1>
  ) : (
    <ArchiveMovieList page={page} setPage={setPage} movies={movies} />
  );
}
