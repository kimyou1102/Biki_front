import React from 'react';
import styled from 'styled-components';
import { TextList } from '@molecules';
import { BorderContainer } from '@atoms';
import { useRecoilValue } from 'recoil';
import { NoticeType, noticeState } from '../../../recoil/notice/notice';

const StyledUl = styled.ul`
  padding: 8px 24px;
`;

export function NoticeBox() {
  const notices = useRecoilValue<NoticeType[]>(noticeState);
  const test = notices.slice(notices.length - 7, notices.length);

  return (
    <BorderContainer radius={10} bgColor="#eeeeee">
      <StyledUl>
        {test.map(({ id, date, title, isCheck }) => (
          <TextList key={id} date={date} title={title} isCheck={isCheck} />
        ))}
      </StyledUl>
    </BorderContainer>
  );
}
