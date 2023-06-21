import React, { useEffect } from 'react';
import { Img, Button } from '@atoms';
import { SearchBar } from '@molecules/searchBar';
import { getMovieBySectionIdAndTitleApi } from '@src/apis/movie/get-movie-by-id-and-title-api';
import { getMovieByTitleApi } from '@src/apis/movie/get-movie-by-title-api';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filmInputState, sketchInputState } from '../../../recoil/archive/atome';
import { movieState, testMovie, movieInitialState } from '../../../recoil/movies';
import { testSketchs, sketchState } from '../../../recoil/sketch/atom';
import { SketchProps, SketchType } from '../../../models/sketch';
import { MovieInfo, MovieData } from '../../../models/movie';

import filter from '../../../assets/images/Filter.png';

interface Props {
  type: string;
  id?: number;
}

export function SearchFilter({ type, id }: Props) {
  const initialMovieData = useRecoilValue<MovieData[]>(movieInitialState);
  // const initialSketchData = useRecoilValue<SketchType[]>(sketchState);
  const [movies, setMovies] = useRecoilState<MovieData[]>(movieState);
  const [sketchs, setSketchs] = useRecoilState<SketchType[]>(sketchState);
  const [filmValue, setFilmValue] = useRecoilState<string>(filmInputState);
  const [sketchValue, setSketchValue] = useRecoilState<string>(sketchInputState);

  useEffect(() => {
    if (filmValue === '') {
      setMovies(initialMovieData);
    }
  }, [filmValue, initialMovieData, setMovies]);

  // useEffect(() => {
  //   if (sketchValue === '') {
  //     setSketchs(initialSketchData);
  //   }
  // }, [sketchValue, initialSketchData, setSketchs]);

  const onFilmSearch = () => {
    if (id) {
      getMovieBySectionIdAndTitleApi(id!, filmValue).then((res) => {
        setMovies(res.list);
      });
    } else {
      getMovieByTitleApi(filmValue).then((res) => {
        setMovies(res.list);
      });
    }
  };

  const onSketchSearch = () => {};

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
        onSearch={type === 'film' ? onFilmSearch : onSketchSearch}
        color="#555555"
        radius={10}
        width={349}
        height={48}
        placeholder={type === 'film' ? '영화 제목 검색' : '제목 검색'}
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
