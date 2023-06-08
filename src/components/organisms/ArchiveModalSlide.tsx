import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Img, Button, Text, Span } from '@atoms';
import { MovieBoxInfo, MovieData } from '../../models/movie';
import left from '../../assets/images/modalLeft.png';
import right from '../../assets/images/modalRight.png';

interface Props {
  data: MovieData;
}

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type ImgsType = {
  id: number;
  first: string;
  second: string;
  third: string;
  fourth: string;
};

const StyledButton = styled.button`
  border: none;
  background: transparent;
  width: calc(80px);
  height: calc(80px);
  cursor: pointer;
  position: absolute;
  top: 50%;
  z-index: 10;

  &.right {
    right: 100px;
    transform: translate(-50%, -50%);
  }

  &.left {
    left: 0px;
    transform: translate(50%, -50%);
  }
`;

const TextWrap = styled.div`
  position: absolute;
  bottom: calc(32px * 0.8);
  z-index: 100;
  left: calc(32px * 0.8);
`;

const MovieInfoSubWrap = styled.div`
  display: flex;
`;

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <StyledButton onClick={onClick} className="left">
      <Img src={left} alt="왼쪽화살표" width={33.5} height={67} />
    </StyledButton>
  );
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <StyledButton onClick={onClick} className="right">
      <Img src={right} alt="오른쪽화살표" width={33.5} height={67} />
    </StyledButton>
  );
}

export function ArchiveModalSlide({ data }: Props) {
  const imgs = [];

  const obj = {
    id: '',
    first: '',
    second: '',
    third: '',
    fourth: '',
  };
  let k: keyof typeof obj;
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (k in data.stillImage) {
    if (k !== 'id') {
      if (data.stillImage[k] !== '') {
        imgs.push(data.stillImage[k]);
      }
    }
  }
  const settings = {
    dots: true,
    loop: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '100px',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,

    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    // eslint-disable-next-line react/no-unstable-nested-components
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: 'dots_custom_archive',
  };
  return (
    <div id="archive" style={{ position: 'relative' }}>
      <TextWrap>
        <Text color="white" weight="bold" size={2.5}>
          {data.titleKo}
          <Span color="white" weight="bold" size={1.25} margin="0 0 0 calc(16px * 0.8)">
            {data.titleEn}
          </Span>
        </Text>
        <MovieInfoSubWrap>
          <Text color="white" margin="0 calc(32px * 0.8) 0 0">
            감독 :
            <Span color="white" size={1.25} weight="bold">
              {data.credit.directorNameKo} / {data.credit.directorNameEn}
            </Span>
          </Text>
          <Text color="white" margin="0 calc(32px * 0.8) 0 0">
            국가 :
            <Span color="white" size={1.25} weight="bold">
              {data.country}
            </Span>
          </Text>
          <Text color="white" margin="0 calc(32px * 0.8) 0 0">
            제작년도 :
            <Span color="white" size={1.25} weight="bold">
              {data.productionYear}
            </Span>
          </Text>
          {/* 🚧출품년도 이거 맞는지 확인 */}
          <Text color="white" margin="0 calc(32px * 0.8) 0 0">
            출품년도 :
            <Span color="white" size={1.25} weight="bold">
              {data.eventYear}
            </Span>
          </Text>
          <Text color="white" margin="0 calc(32px * 0.8) 0 0">
            상영시간 :
            <Span color="white" size={1.25} weight="bold">
              {data.runningTime}분
            </Span>
          </Text>
          <Text color="white" margin="0 calc(32px * 0.8) 0 0">
            관람등급 :
            <Span color="white" size={1.25} weight="bold">
              {data.rating}
            </Span>
          </Text>
        </MovieInfoSubWrap>
      </TextWrap>
      <Slider {...settings}>
        {imgs.map((image, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Img key={i} src={image} alt="아카이브모달사진" height={620} objectFit="cover" />
        ))}
      </Slider>
    </div>
  );
}
