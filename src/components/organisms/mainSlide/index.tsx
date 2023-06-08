import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MainPhoto, NextArrow, PrevArrow } from '@molecules';
import { MainProps } from 'src/models/main';

interface PhotoProps extends MainProps {
  id: number;
}

const test: PhotoProps[] = [
  {
    id: 1,
    sub: '제18회 부산국제어린이청소년영화제',
    title: '“달라도 좋아! We are all Unique!”',
    date: '2023년 7월 10일 (월) ~ 16일 (일)',
    src: 'http://www.biky.or.kr/uploads/editor/20220805144747_1-13copy.jpg',
  },
  {
    id: 2,
    sub: '제18회 부산국제어린이청소년영화제',
    title: '“달라도 좋아! We are all Unique!”',
    date: '2023년 7월 10일 (월) ~ 16일 (일)',
    src: 'http://www.biky.or.kr/uploads/editor/20220805144932_1-17copy.jpg',
  },
  {
    id: 3,
    sub: '제18회 부산국제어린이청소년영화제',
    title: '“달라도 좋아! We are all Unique!”',
    date: '2023년 7월 10일 (월) ~ 16일 (일)',
    src: 'http://www.biky.or.kr/uploads/editor/20220805144828_1-15copy.jpg',
  },
  {
    id: 4,
    sub: '제18회 부산국제어린이청소년영화제',
    title: '“달라도 좋아! We are all Unique!”',
    date: '2023년 7월 10일 (월) ~ 16일 (일)',
    src: 'http://www.biky.or.kr/uploads/editor/20220805145030_1-15-4copy.jpg',
  },
];

export function MainSlide() {
  const settings = {
    dots: true,
    loop: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    // eslint-disable-next-line react/no-unstable-nested-components
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom',
  };
  return (
    <Slider {...settings}>
      {test.map((main) => (
        <MainPhoto key={main.id} src={main.src} sub={main.sub} title={main.title} date={main.date} />
      ))}
    </Slider>
  );
}
