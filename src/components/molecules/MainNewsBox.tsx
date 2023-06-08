import React from 'react';
import styled from 'styled-components';
import { BorderContainer, MainNewsUl, Text } from '@atoms';
import { TextList, MainNewsBoxText } from '@molecules';
import { useRecoilValue } from 'recoil';
import { NoticeType, noticeState } from '../../recoil/notice/notice';

interface Props {
  data: NoticeType[];
  newsName: string;
}

export function MainNewsBox({ data, newsName }: Props) {
  return (
    <BorderContainer
      radius={10}
      bgColor="white"
      border="#74B743"
      width={630}
      height={newsName === '언론보도' ? 482 : 396}
      padding="calc(26px * 0.8) calc(31px * 0.8) calc(16px * 0.8) calc(31px * 0.8)"
    >
      <Text size={1.5} weight="bold">
        {newsName}
      </Text>
      <MainNewsUl type="news">
        {data.map(({ id, date, title, isCheck }) => (
          <MainNewsBoxText key={id} date={date} title={title} />
        ))}
      </MainNewsUl>
    </BorderContainer>
  );
}
