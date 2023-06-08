import React from 'react';
import styled from 'styled-components';
import { Img, H1, Span, Text, Section } from '@atoms';
import { JudgeItem } from '@molecules';
import data from '../../assets/images/character1.png';
import data2 from '../../assets/images/emblem.png';

const GridUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: calc(16px * 0.8) calc(155px * 0.8);
  margin-top: calc(16px * 0.8);
`;

const JudgeGridWrap = styled.div`
  margin-top: calc(80px * 0.8);
`;

export function JudgesPage() {
  const judgeData1 = [
    {
      id: 1,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 2,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 3,
      src: data,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 4,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 5,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 6,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 7,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 8,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
  ];

  const judgeData2 = [
    {
      id: 1,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 2,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 3,
      src: data,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 4,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 5,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 6,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 7,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 8,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
  ];

  const judgeData3 = [
    {
      id: 1,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 2,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 3,
      src: data,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 4,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 5,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
    {
      id: 6,
      src: data2,
      name: '이름',
      career: '<게임 플레이!> 감독, 배우, 촬영',
      awards: '2021 맑은바람상, 사미르나스르상, 이야기상',
    },
  ];
  return (
    <Section>
      <H1 size={1.5} weight="bold" margin="0 0 calc(24px * 0.8) 0">
        레디~ 액션! 심사위원
      </H1>
      <Text>
        ‘레디~ 액션!’은 지난해 레디~ 액션! 수상자와 국내외 어린이청소년 영화인으로 구성된 심사위원이 본선심사를
        진행합니다.
      </Text>
      <div>
        <Text color="#74B743" size={1.125} weight="bold" margin="calc(56px * 0.8) 0 calc(16px * 0.8) 0">
          올해의 심사위원레디~
        </Text>
        <Text size={1.125} weight="bold">
          레디~액션! 12
        </Text>
        <GridUl>
          {judgeData1.map((judge) => (
            <JudgeItem name={judge.name} src={judge.src} awards={judge.awards} career={judge.career} />
          ))}
        </GridUl>
      </div>
      <JudgeGridWrap>
        <Text size={1.125} weight="bold">
          레디~액션! 15
        </Text>
        <GridUl>
          {judgeData2.map((judge) => (
            <JudgeItem name={judge.name} src={judge.src} awards={judge.awards} career={judge.career} />
          ))}
        </GridUl>
      </JudgeGridWrap>
      <JudgeGridWrap>
        <Text size={1.125} weight="bold">
          레디~액션! 18
        </Text>
        <GridUl>
          {judgeData3.map((judge) => (
            <JudgeItem name={judge.name} src={judge.src} awards={judge.awards} career={judge.career} />
          ))}
        </GridUl>
      </JudgeGridWrap>
      <JudgeGridWrap>
        {/* <Text size={1.125} weight="bold">
        ‘감동과 감성을 나눌 수 있는 좋은 영화'에 BIKY가 응원가 감사의 마음을 담아 <마음의별빛상>을 드립니다.<br/> 
<마음의별빛상>은 어린이와 청소년을 위해 영화를 만든 어른 감독에게 주는 상으로 영화전문가들로 구성된 심사위원이 심사를 진행합니다.
        </Text> */}
        <GridUl>
          {judgeData3.map((judge) => (
            <JudgeItem name={judge.name} src={judge.src} awards={judge.awards} career={judge.career} />
          ))}
        </GridUl>
      </JudgeGridWrap>
    </Section>
  );
}
