import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArchiveMovieList } from '@organisms';
import { MovieData } from 'src/models/movie';

interface Props {
  data: MovieData[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export function ArchiveMovieSection({ data, page, setPage }: Props) {
  const { t } = useTranslation();

  // const [movies, setMovies] = useRecoilState<MovieData[]>(movieState);
  // const setInitialMovieData = useSetRecoilState<MovieData[]>(movieInitialState); // api에서 받아오는 걸로

  // const [page, setPage] = useState(0);

  // const [movies, setMovies] = useState([]);

  // const movieApi = useCallback(async () => {
  //   await getMovieApi()
  //     .then((res) => {
  //       console.log(res);
  //       setMovies(res);
  //       setInitialMovieData(res);
  //     })
  //     .catch((err) => console.log(err));
  // }, [setInitialMovieData, setMovies]);

  // useEffect(() => {
  //   movieApi();
  // }, [movieApi]);

  return data.length === 0 ? (
    <h1>{t(`archive.empty`)}</h1>
  ) : (
    <ArchiveMovieList page={page} setPage={setPage} movies={data} />
  );

  // return movies.length === 0 ? (
  //   <h1>등록된 게시물이 없습니다.</h1>
  // ) : (
  //   <ArchiveMovieList page={page} setPage={setPage} movies={movies} />
  // );
}
