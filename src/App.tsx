import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import {
  Nav,
  NoticeArticel,
  MainMovieList,
  MainSlide,
  ContentBoxs,
  MovieBox,
  ArchiveMovieList,
  ArchiveMovieSection,
  SketcSection,
  NewsSection,
} from '@organisms';
import { Header } from '@molecules';
import { Section, Div, Input, H3, Th, Tr, THead, A } from '@atoms';
import { useSetRecoilState } from 'recoil';
import { NewsTemplates } from '@templates';
import {
  ArchiveMoviePage,
  ArchiveSketchPage,
  NewsNotice,
  Newsletter,
  NewsDetail,
  MainPage,
  FestivalSymbolPage,
  JudgesPage,
  OpeningFilmPage,
} from '@pages';
import { HeaderLayout } from '@layout';
import { ScheduleInfoPage } from '@pages/movieSchedule';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HeaderLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/archive/distributions" element={<ArchiveMoviePage />} />
          <Route path="/archive/sketch" element={<ArchiveSketchPage />} />
          <Route path="/news/notice/:id" element={<NewsDetail type="notice" />} />
          <Route path="/news/notice" element={<NewsNotice />} />
          <Route path="/news/newsletter" element={<Newsletter />} />
          <Route path="/news/newsletter/:id" element={<NewsDetail type="newsletter" />} />
          <Route path="/festival" element={<FestivalSymbolPage />} />
          <Route path="/judges" element={<JudgesPage />} />
          <Route path="/movie/schedule" element={<ScheduleInfoPage />} />
          <Route path="/program/opening-film" element={<OpeningFilmPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
