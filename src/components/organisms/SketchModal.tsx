import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Text, Img } from '@atoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState, modalPositionState, modalDataState } from '../../store/archive/atome';
import left from '../../assets/images/modalLeft.png';
import right from '../../assets/images/modalRight.png';

const Modal = styled.div<{ state: boolean }>`
  width: calc(1180px * 0.8);
  height: calc(899px * 0.8);
  background-color: white;
  display: ${(props) => (props.state === true ? 'block' : 'none')};

  .titleWrap {
    width: calc(100% - ((100% - 670.4px) / 2));
    margin: 0px 0px 0px auto;
    margin-top: calc(61px * 0.8);
    margin-bottom: calc(24px * 0.8);
  }
`;

const Wrap = styled.div`
  overflow: hidden;

  & > div + div {
    margin-top: 20px;
  }
`;

const Inner = styled.div`
  position: relative;

  /* .paging_items {
    filter: grayscale(1);

    &:hover {
      filter: none;
    }
  }

  .slick-current .paging_items {
    filter: none;
  } */
`;

const defaultItemStyle = css`
  width: 100%;
  text-align: center;

  &.main {
    width: calc(838px * 0.8);
    height: calc(558px * 0.8);
    vertical-align: top;
  }

  img {
    height: 100%;
    border-radius: 16px;
    vertical-align: top;
  }
`;

const MainSlickItems = styled.div`
  ${defaultItemStyle}
  height: 350px;

  img {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const defaultButtonStyle = css`
  position: absolute;
  top: 50%;
  padding: 0;
  width: calc(80px * 0.8);
  height: calc(80px * 0.8);
  background-color: #767676;
  border: none;
  border-radius: 15px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  img {
    width: calc(24px * 0.8);
    height: calc(40px * 0.8);
  }
`;

const PrevButton = styled.button`
  ${defaultButtonStyle}
  left: calc(48px * 0.8);
`;

const NextButton = styled.button`
  ${defaultButtonStyle}
  right: calc(48px * 0.8);
`;

const PagingItems = styled.div`
  ${defaultItemStyle}
  width: calc(200px * 0.8);
  height: calc(133px * 0.8);
  /* height: 80px; */
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
`;

interface Props {
  state: boolean;
}

export function SketchModal({ state }: Props) {
  const [modalDatas, setModalDatas] = useRecoilState(modalDataState);
  //   console.log('modalDatas : ', modalDatas);
  const imgs = modalDatas.urls.map((e, i) => ({ id: i, src: e }));
  console.log(imgs.length);

  console.log('state :', state);
  //   const [mainSlick, setMainSlick] = useState<any>(1);
  //   const [pagingSlick, setPagingSlick] = useState<any>(1);

  const [nav1, setNav1] = useState<any>();
  const [nav2, setNav2] = useState<any>();

  useEffect(() => {
    if (nav1) {
      nav1.slickGoTo(0);
    }

    if (nav2) {
      nav2.slickGoTo(0);
    }
    console.log('값 변함');
  }, [modalDatas, nav1, nav2]);

  //   const mainSlickRef = useRef<any>();
  //   const pagingSlickRef = useRef<any>();

  //   console.log(mainSlick);
  //   console.log(mainSlickRef.current);

  //   useEffect(() => {
  //     setMainSlick(mainSlickRef.current);
  //     setPagingSlick(pagingSlickRef.current);
  //   }, []);

  const mainSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const pagingSettings = {
    dots: false,
    arrows: false,
    infinite: !(imgs.length < 5),
    centerMode: false,
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  //   const onClickPrev = useCallback((ref: any) => () => ref.current.slickPrev(), []);
  //   const onClickNext = useCallback((ref: any) => () => ref.current.slickNext(), []);
  const onClickPrev = useCallback((ref: any) => () => ref.slickPrev(), []);
  const onClickNext = useCallback((ref: any) => () => ref.slickNext(), []);
  //   console.log(test);

  return (
    <Modal id="modal" state={state}>
      <div className="titleWrap">
        <Text size={2} weight="bold" font="PretendardBold">
          {modalDatas.title}
        </Text>
      </div>

      <Wrap>
        <Inner>
          {/* <Slider ref={mainSlickRef} asNavFor={pagingSlick} {...mainSettings}> */}
          <Slider ref={(slider1: any) => setNav1(slider1)} asNavFor={nav2} {...mainSettings}>
            {imgs.map((v) => {
              return (
                <MainSlickItems key={v.id} className="main">
                  <img src={v.src} alt="사진" />
                </MainSlickItems>
              );
            })}
          </Slider>

          <>
            <PrevButton onClick={onClickPrev(nav1)}>
              <img src={left} alt="왼쪽화살표" />
            </PrevButton>
            <NextButton onClick={onClickNext(nav1)}>
              <img src={right} alt="오른쪽화살표" />
            </NextButton>
            {/* <PrevButton onClick={onClickPrev(mainSlickRef)}>◀</PrevButton>
            <NextButton onClick={onClickNext(mainSlickRef)}>▶</NextButton> */}
          </>
        </Inner>

        <Inner id="paging">
          {/* <Slider ref={pagingSlickRef} asNavFor={mainSlick} {...pagingSettings}> */}
          <Slider ref={(slider2: any) => setNav2(slider2)} asNavFor={nav1} {...pagingSettings}>
            {imgs.map((v) => {
              return (
                <PagingItems key={v.id} className="paging_items">
                  <img src={v.src} alt="사진" />
                </PagingItems>
              );
            })}
          </Slider>
          {/* <>
            <PrevButton onClick={onClickPrev(pagingSlickRef)}>left</PrevButton>
            <NextButton onClick={onClickNext(pagingSlickRef)}>right</NextButton>
          </> */}
        </Inner>
      </Wrap>
    </Modal>
  );
}
