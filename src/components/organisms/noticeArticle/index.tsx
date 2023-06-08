import styled from 'styled-components';
import React from 'react';
import { NoticeBox } from '@organisms/noticeBox';
import { NoticeHeader } from '@molecules';

const StyledArticel = styled.article`
  width: calc(1280px * 0.8);
  margin: 5rem auto 7rem;
`;

export function NoticeArticel() {
  return (
    <StyledArticel>
      <NoticeHeader title="공지사항" />
      <NoticeBox />
    </StyledArticel>
  );
}
