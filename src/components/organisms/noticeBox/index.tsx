import React from 'react';
import styled from 'styled-components';
import { TextList } from '@molecules';
import { BorderContainer, MainNewsUl } from '@atoms';
import { useRecoilValue } from 'recoil';
import { NoticeType, noticeState } from '../../../recoil/notice/notice';

const StyledUl = styled.ul`
  padding: calc(26px * 0.8) calc(48px * 0.8);
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
`;

export function NoticeBox() {
  const notices = useRecoilValue<NoticeType[]>(noticeState);
  // const test = notices.slice(notices.length - 7, notices.length);
  const test = notices;

  return (
    <BorderContainer radius={10} bgColor="#eeeeee">
      <MainNewsUl type="notice">
        {test.map(({ id, date, title, isCheck }) => (
          <TextList key={id} date={date} title={title} isCheck={isCheck} />
        ))}
      </MainNewsUl>
    </BorderContainer>
  );
}
