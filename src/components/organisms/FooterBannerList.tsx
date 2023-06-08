import React from 'react';
import styled from 'styled-components';
import { Button } from '@atoms';

const test = Array.from({ length: 6 }, (v, i) => i + 1);

const Slider = styled.div`
  /* overflow: hidden;
  position: relative;
  width: 1440px; // 이미지 보여지는 뷰 부분
  height: 200px; */

  /* .image-box {
    width: 5280px; // 원본+클론의 총 합
    height: 100%;
    display: flex;
    flex-wrap: nowrap;
    animation: bannermove 5s linear infinite;
  }
  @keyframes bannermove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-50%, 0);
    }
  } */
`;

export function FooterBannerList() {
  return (
    <Slider>
      <div className="image-box">
        <ul>
          {test.map((e) => (
            <li key={e}>
              <Button>후원사배너{e}</Button>
            </li>
          ))}
        </ul>

        {/* <ul>
          {test.map((e) => (
            <div key={e} className="clone">
              <Button>후원사배너{e}</Button>
            </div>
          ))}
        </ul> */}
      </div>
    </Slider>
  );
}
