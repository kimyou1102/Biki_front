import React from 'react';
import styled from 'styled-components';
import { TextList } from '@molecules';
import { BorderContainer, MainNewsUl } from '@atoms';
import { useRecoilValue } from 'recoil';
import { NoticeType, noticeState } from '../../../recoil/notice/notice';
import { PostType } from '../../../models/post';

interface Props {
  data: PostType[];
}

const StyledUl = styled.ul`
  padding: calc(26px * 0.8) calc(48px * 0.8);
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
`;

export function NoticeBox({ data }: Props) {
  return (
    <BorderContainer radius={10} bgcolor="#eeeeee">
      <MainNewsUl type="notice">
        {data.map((post) => {
          const date = new Date(post.createdDate!);
          const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
          return <TextList key={post.id} date={dateStr} title={post.titleKo} isCheck={post.highlightStatus === 1} />;
        })}
      </MainNewsUl>
    </BorderContainer>
  );
}
