import React from 'react';
import styled from 'styled-components';
import { Button, Img } from '@atoms';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import left from '../../assets/images/leftSlide.png';
import right from '../../assets/images/rightSlide.png';

const test = Array.from({ length: 8 }, (v, i) => i + 1);

const Container = styled.div`
  width: calc(1520px * 0.8);
  margin: 0 auto;
`;

const Banner = styled.li`
  display: inline-block;
`;

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <Button onClick={onClick} className="left">
      <Img src={left} alt="왼쪽화살표" width={38} height={67} />
    </Button>
  );
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <Button onClick={onClick} className="right">
      <Img src={right} alt="오른쪽화살표" width={38} height={67} />
    </Button>
  );
}

export function FooterBannerList() {
  const settings = {
    loop: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    // eslint-disable-next-line react/no-unstable-nested-components
  };

  return (
    <Container id="banner">
      <Slider {...settings}>
        {test.map((e) => (
          <ul key={e}>
            <Banner>
              <Button width={200} bgcolor="tomato">
                후원사배너{e}
              </Button>
            </Banner>
          </ul>
        ))}
      </Slider>
    </Container>
  );
}
