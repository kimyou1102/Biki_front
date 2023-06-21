import React, { useState, useEffect, useCallback } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { ProgramMoviesTemplate } from '@templates';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { koUrlState, enUrlState } from '../../../recoil/archive/program/atom';
import { languageState } from '../../../recoil/language/atom';

export function MoviePage() {
  // 상영작 아이디 추출
  const { id } = useParams();

  // 쿼리파라미터 타이틀 추출
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(location.search);

  // 쿼리 파라미터 값 추출
  const getTitle = searchParams.get('title');

  const [title, setTitle] = useState('');
  const language = useRecoilValue(languageState);
  const [koUrl, setKoUrl] = useRecoilState(koUrlState);
  const [enUrl, setEnUrl] = useRecoilState(enUrlState);

  useEffect(() => {
    if (language === 'English') {
      const koIndex = koUrl.indexOf(getTitle!);
      if (koIndex === -1) {
        const index = enUrl.indexOf(getTitle!);
        setTitle(koUrl[index]);
      } else {
        setTitle(getTitle!);
      }
    } else {
      const enIndex = enUrl.indexOf(getTitle!);
      if (enIndex === -1) {
        const index = koUrl.indexOf(getTitle!);
        setTitle(enUrl[index]);
      } else {
        setTitle(getTitle!);
      }
    }
  }, [enUrl, getTitle, koUrl, language, title]);

  return <ProgramMoviesTemplate title={title!} id={parseInt(id!, 10)} />;
}
