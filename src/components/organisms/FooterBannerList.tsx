import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Button, Img } from '@atoms';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import left from '../../assets/images/banner_left.png';
import right from '../../assets/images/banner_right.png';
import { getSponsorApi } from '../../apis/sponsor/get-sponsor-api';
import { SponsorType } from '../../models/sponsor';

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Container = styled.div`
  width: calc(1520px * 0.8);
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

function PrevArrow({ onClick }: ArrowProps) {
  return (
    <StyledButton onClick={onClick} className="left">
      <Img src={left} alt="왼쪽화살표" width={8} height={14} />
    </StyledButton>
  );
}

function NextArrow({ onClick }: ArrowProps) {
  return (
    <StyledButton onClick={onClick} className="right">
      <Img src={right} alt="오른쪽화살표" width={8} height={14} />
    </StyledButton>
  );
}

export function FooterBannerList() {
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

  // const test = Array.from({ length: 6 }, (v, i) => i + 1);

  const settings = {
    loop: true,
    infinite: sponsors.length > 7,
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
        {sponsors.map((e) => (
          <ul key={e.id}>
            <li>
              <Button width={200} height={40} onClick={() => window.open(e.url)}>
                <Img alt="후원사" src={e.image} width={200} height={40} />
              </Button>
            </li>
          </ul>
        ))}
        {/* {test.map((e) => (
          <ul key={e}>
            <li>
              <Button width={200} height={40} bgcolor="tomato">
                후원사배너{e}
              </Button>
            </li>
          </ul>
        ))} */}
      </Slider>
    </Container>
  );
}
