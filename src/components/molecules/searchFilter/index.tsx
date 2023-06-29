import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { Img, Button } from '@atoms';
import { SearchBar } from '@molecules/searchBar';
import { getMovieBySectionIdAndTitleApi } from '@src/apis/movie/get-movie-by-id-and-title-api';
import { getMovieByTitleApi } from '@src/apis/movie/get-movie-by-title-api';
import { useRecoilState, useRecoilValue } from 'recoil';
import { filmInputState, sketchInputState, pageState } from '../../../store/archive/atome';
import { movieState, testMovie, movieInitialState } from '../../../store/movies';
import { testSketchs, sketchState } from '../../../store/sketch/atom';
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
  const [page, setPage] = useRecoilState<number>(pageState);
  const { t } = useTranslation();

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

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
        setPage(0);
      });
    }
  };

  console.log(movies);

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

  return isMobile ? (
    <SearchBar
      value={type === 'film' ? filmValue : sketchValue}
      onChange={onChange}
      onSearch={type === 'film' ? onFilmSearch : onSketchSearch}
      color="#555555"
      radius={10}
      height={48}
      placeholder={type === 'film' ? t(`archive.search`) : t(`news.search`)}
    />
  ) : (
    <div style={{ display: 'flex' }}>
      <SearchBar
        value={type === 'film' ? filmValue : sketchValue}
        onChange={onChange}
        onSearch={type === 'film' ? onFilmSearch : onSketchSearch}
        color="#555555"
        radius={10}
        width={349}
        height={48}
        placeholder={type === 'film' ? t(`archive.search`) : t(`news.search`)}
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
