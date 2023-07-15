import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useRecoilValue } from 'recoil';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Img, Text, Span, FlexContainer } from '@atoms';
import { UserMovieData } from '../../../models/movie';
import left from '../../../assets/images/modalLeft.png';
import right from '../../../assets/images/modalRight.png';
import { languageState } from '../../../store/language/atom';

interface Props {
  // data: MovieData;
  data: UserMovieData;
  setSlick?: any;
}

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

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
    right: 0px;
    transform: translate(0, -50%);
  }

  &.left {
    left: 0px;
    transform: translate(0, -50%);
  }
`;

const TextWrap = styled.div`
  position: absolute;
  bottom: calc(32px * 0.8);
  z-index: 100;
  left: calc(32px * 0.8);
`;

const ShadowBox = styled.div<{ src: string }>`
  width: 100%;
  height: calc(620px * 0.8);
  background-color: rgba(0, 0, 0, 0.01);
  /* background-image: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.4) 151.05%); */
  background-image: ${(props) =>
    `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, rgba(0, 0, 0, 0.4) 151.05%), url(${props.src})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <StyledButton onClick={onClick} className="left">
      <Img src={left} alt="왼쪽화살표" width={38} height={67} />
    </StyledButton>
  );
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <StyledButton onClick={onClick} className="right">
      <Img src={right} alt="오른쪽화살표" width={38} height={67} />
    </StyledButton>
  );
}

export function ArchiveModalSlide({ data }: Props) {
  const [slick, setSlick] = useState<any>();
  const { t } = useTranslation();
  const language = useRecoilValue(languageState);
  const imgs = [];

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

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

  // // 모달 창 열때마다 첫 순서로 가게
  useEffect(() => {
    if (slick) {
      slick.slickGoTo(0);
    }
  }, [data, slick]);

  const settings = {
    dots: true,
    loop: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 1,
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

  const mobileSettings = {
    dots: false,
    loop: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    initialSlide: 1,
  };
  return isMobile ? (
    <div id="archive">
      <Slider {...mobileSettings} ref={(e: any) => setSlick(e)}>
        {imgs.map((image, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <Img key={i} src={image} alt="스틸컷" height={148 / 0.8} />
        ))}
      </Slider>
    </div>
  ) : (
    <div id="archive" style={{ position: 'relative' }}>
      <TextWrap>
        <Text color="white" weight="bold" size={2.5} margin="0 0 calc(10px * 0.8) 0">
          {language === 'English' ? data.titleKo : data.titleEn}
          <Span color="white" weight="bold" size={1.25} margin="0 0 0 calc(16px * 0.8)">
            {language === 'English' ? data.titleEn : data.titleKo}
          </Span>
        </Text>
        <FlexContainer>
          <Text color="white" margin="0 calc(32px * 0.8) 0 0">
            {t(`movie.director`)} :
            <Span color="white" size={1.25} weight="bold" margin="0 0 0 calc(8px * 0.8)">
              {language === 'English'
                ? `${data.credit.directorNameKo} / ${data.credit.directorNameEn}`
                : `${data.credit.directorNameEn} / ${data.credit.directorNameKo}`}
            </Span>
          </Text>
          <Text color="white" margin="0 calc(32px * 0.8) 0 0">
            {t(`movie.nationality`)} :
            <Span color="white" size={1.25} weight="bold" margin="0 0 0 calc(8px * 0.8)">
              {data.country}
            </Span>
          </Text>
          <Text color="white" margin="0 calc(32px * 0.8) 0 0">
            {t(`movie.productionYear`)} :
            <Span color="white" size={1.25} weight="bold" margin="0 0 0 calc(8px * 0.8)">
              {data.productionYear}
            </Span>
          </Text>
          {/* 🚧출품년도 이거 맞는지 확인 */}
          <Text color="white" margin="0 calc(32px * 0.8) 0 0">
            {t(`movie.exhibtionYear`)} :
            <Span color="white" size={1.25} weight="bold" margin="0 0 0 calc(8px * 0.8)">
              {data.eventYear}
            </Span>
          </Text>
          <Text color="white" margin="0 calc(32px * 0.8) 0 0">
            {t(`movie.runningTime`)} :
            <Span color="white" size={1.25} weight="bold" margin="0 0 0 calc(8px * 0.8)">
              {data.runningTime}
              {t(`movie.minute`)}
            </Span>
          </Text>
          <Text color="white" margin="0 calc(32px * 0.8) 0 0">
            {t(`movie.rating`)} :
            <Span color="white" size={1.25} weight="bold" margin="0 0 0 calc(8px * 0.8)">
              {data.rating}
            </Span>
          </Text>
        </FlexContainer>
      </TextWrap>
      <Slider {...settings} ref={(e: any) => setSlick(e)}>
        {imgs.map((image, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i} style={{ position: 'relative' }}>
            <ShadowBox className="shadow" src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
