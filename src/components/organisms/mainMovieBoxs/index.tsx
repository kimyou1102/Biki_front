import React, { useRef, useEffect } from 'react';
import { MovieBox } from '@organisms/movieBox';
import { SlideContainer } from '@atoms';
import { useSetRecoilState } from 'recoil';
import { mainMovieScrollState } from '../../../recoil/notice/notice';
import { MovieInfo } from '../../../models/movie';

interface Props {
  data: MovieInfo[];
}

export function MainMovieBoxs({ data }: Props) {
  const setScroll = useSetRecoilState<HTMLDivElement | undefined>(mainMovieScrollState);
  const scrollRef = useRef<HTMLDivElement>();

  useEffect(() => {
    setScroll(scrollRef.current);
  }, [setScroll]);

  return (
    <SlideContainer ref={scrollRef}>
      {data.map((movie) => (
        <MovieBox
          key={movie.id}
          id={movie.id}
          type="main"
          title={movie.title}
          director={movie.director}
          country={movie.country}
          year={movie.year}
          runningTime={movie.runningTime}
          url={movie.url}
        />
      ))}
    </SlideContainer>
  );
}
