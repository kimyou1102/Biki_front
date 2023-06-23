import React, { useState, useEffect, useCallback } from 'react';
import { ArchiveTemplate, ProgramMoviesTemplate } from '@templates';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { UserMovieData } from '@src/models/movie';
import { movieModalDataState } from '@src/recoil/movies';
import { getUserMoviedApi } from '@src/apis/movie/get-user-movie-detail-api';

export function OnlineMoviePage() {
  // 상영작 아이디 추출
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useRecoilState<UserMovieData>(movieModalDataState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserMoviedApi(parseInt(id!, 10))
      .then((res) => {
        if (res.data.screening.status === '대기') {
          alert('온라인 상영을 제공하는 작품이 아닙니다.');
          navigate(-1);
          return false;
        }

        setMovie(res.data);
        setIsLoading(false);
        return true;
      })
      .catch((err) => console.log(err));
  }, [id, setMovie, navigate]);

  const test = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/814268632?h=44a33233d8&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;

  return (
    <ArchiveTemplate title="" type="online" pageTitle="온라인 상영관" sub={movie.titleKo}>
      <div dangerouslySetInnerHTML={{ __html: movie.screening.vimeo }} />
    </ArchiveTemplate>
  );
}
