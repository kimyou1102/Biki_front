import React, { useEffect, useCallback, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MainPhoto, NextArrow, PrevArrow } from '@molecules';
import { MainProps } from 'src/models/main';
import { getBannerApi } from '@src/apis/banner/get-banner-api';
import { BannerType } from '../../../models/banner';

interface PhotoProps extends MainProps {
  id: number;
}

export function MainSlide() {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const [banners, setBanners] = useState<BannerType[]>([
    {
      id: 0,
      image: '',
      url: '',
    },
  ]);

  const bannerApi = useCallback(async () => {
    await getBannerApi()
      .then((res) => {
        console.log(res);
        setBanners(res);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    bannerApi();
  }, [bannerApi]);

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

  const settingsMobile = {
    dots: false,
    loop: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return isMobile ? (
    <Slider {...settingsMobile}>
      {banners.map((main) => (
        <MainPhoto key={main.id} src={main.image} sub="" title="" date="" url={main.url} type="mobile" />
      ))}
    </Slider>
  ) : (
    <Slider {...settings}>
      {banners.map((main) => (
        <MainPhoto key={main.id} src={main.image} sub="" title="" date="" url={main.url} type="pc" />
      ))}
    </Slider>
  );
  // return (
  //   <Slider {...settings}>
  //     {banners.map((main) => (
  //       <MainPhoto key={main.id} src={main.image} sub="" title="" date="" url={main.url} />
  //     ))}
  //     {/* {test.map((main) => (
  //       <MainPhoto key={main.id} src={main.src} sub={main.sub} title={main.title} date={main.date} />
  //     ))} */}
  //   </Slider>
  // );
}
