import React, { useEffect, useCallback, useState, useRef } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { Button, Img } from '@atoms';
import 'swiper/swiper.min.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import SwiperCore, { Navigation, Scrollbar, Autoplay } from 'swiper';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from 'swiper/react';
import left from '../../assets/images/banner_left.png';
import right from '../../assets/images/banner_right.png';
import { getSponsorApi } from '../../apis/sponsor/get-sponsor-api';
import { SponsorType } from '../../models/sponsor';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Container = styled.div<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? '100%' : 'calc(1520px * 0.8)')};
  /* width: calc(700px * 0.8); */
  height: calc(60px * 0.8);
  margin: 0 auto;
`;

const StyledButton = styled.button`
  position: absolute;
  width: calc(40px * 0.8);
  height: calc(40px * 0.8);
  background: white;
  box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  border: none;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;

  &.left {
    left: 0px;
    transform: translate(-50%, 0%);
  }

  &.right {
    right: 0px;
    transform: translate(50%, 0%);
  }
`;

export function FooterBannerList() {
  const originRef = useRef<any>(null);
  const cloneRef = useRef<any>(null);

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  // useEffect(() => {
  //   console.log(originRef.current.getBoundingClientRect().left);
  // });

  const [sponsors, setSponsors] = useState<SponsorType[]>([
    {
      id: 0,
      image: '',
      url: '',
    },
  ]);

  const sponsorApi = useCallback(async () => {
    await getSponsorApi()
      .then((res) => {
        console.log(res);
        setSponsors(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    sponsorApi();
  }, [sponsorApi]);

  const test = Array.from({ length: 8 }, (v, i) => i + 1);
  SwiperCore.use([Autoplay]);

  return isMobile ? (
    <Container id="banner" isMobile={isMobile}>
      <Swiper
        // slidesPerView="auto"
        spaceBetween={16}
        centeredSlides
        loop
        init={false}
        freeMode
        observer
        observeParents
        speed={8000}
        allowTouchMove={false}
        slidesPerView={2}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {sponsors.map((e) => (
          <SwiperSlide key={e.id}>
            <Button width={200} height={40} onClick={() => window.open(e.url)}>
              <Img alt="후원사" src={e.image} width={200} height={40} />
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  ) : (
    <Container id="banner" isMobile={isMobile}>
      <Swiper
        // slidesPerView="auto"
        spaceBetween={16}
        centeredSlides
        loop
        init={false}
        freeMode
        observer
        observeParents
        speed={8000}
        allowTouchMove={false}
        slidesPerView={7}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        {sponsors.map((e) => (
          <SwiperSlide key={e.id}>
            <Button
              width={200}
              height={40}
              onClick={() => {
                window.open(e.url);
              }}
            >
              <Img alt="후원사" src={e.image} width={200} height={40} />
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
