import React, { useState, useEffect, useCallback } from 'react';
import { ProgramMoviesTemplate } from '@templates';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function MoviePage() {
  // 상영작 아이디 추출
  const { id } = useParams();

  // 쿼리파라미터 타이틀 추출
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  // 쿼리 파라미터 값 추출
  const title = searchParams.get('title');

  return <ProgramMoviesTemplate title={title!} id={parseInt(id!, 10)} />;
}
