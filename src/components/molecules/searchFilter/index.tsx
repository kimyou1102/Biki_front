import React, { useEffect } from 'react';
import { Img, Button } from '@atoms';
import { SearchBar } from '@molecules/searchBar';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filmInputState, sketchInputState } from '../../../recoil/archive/atome';
import { movieState, testMovie, movieInitialState } from '../../../recoil/movies';
import { testSketchs, sketchState } from '../../../recoil/sketch/atom';
import { SketchProps } from '../../../models/sketch';
import { MovieInfo, MovieData } from '../../../models/movie';

import filter from '../../../assets/images/Filter.png';

interface Props {
  type: string;
}

export function SearchFilter({ type }: Props) {
  const initialMovieData = useRecoilValue<MovieData[]>(movieInitialState);
  const initialSketchData = testSketchs;
  const [movies, setMovies] = useRecoilState<MovieData[]>(movieState);
  const [sketchs, setSketchs] = useRecoilState<SketchProps[]>(sketchState);
  const [filmValue, setFilmValue] = useRecoilState<string>(filmInputState);
  const [sketchValue, setSketchValue] = useRecoilState<string>(sketchInputState);

  useEffect(() => {
    if (filmValue === '') {
      setMovies(initialMovieData);
    }
  }, [filmValue, initialMovieData, setMovies]);

  useEffect(() => {
    if (sketchValue === '') {
      setSketchs(initialSketchData);
    }
  }, [sketchValue, initialSketchData, setSketchs]);

  const onSearch = () => {
    if (type === 'film') {
      const newArr = movies.filter((e) => e.titleKo.includes(filmValue));
      setMovies(newArr);
    } else {
      const newArr = sketchs.filter((e) => e.title.includes(sketchValue));
      setSketchs(newArr);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'film') {
      setFilmValue(e.target.value);
    } else {
      setSketchValue(e.target.value);
    }
  };

  const onClick = () => {
    console.log('필터링');
  };

  return (
    <div style={{ display: 'flex' }}>
      <SearchBar
        value={type === 'film' ? filmValue : sketchValue}
        onChange={onChange}
        onSearch={onSearch}
        color="#555555"
        radius={10}
        width={349}
        height={48}
        placeholder={type === 'film' ? '영화 제목, 태그 검색' : '제목 검색'}
      />
      <Button
        type="button"
        border="#555555"
        width={48}
        height={48}
        radius="10px"
        display="flex"
        justify="center"
        align="center"
        margin="0px 0px 0px 13px"
        onClick={onClick}
      >
        <Img src={filter} alt="필터" width={32} height={32} />
      </Button>
    </div>
  );
}
