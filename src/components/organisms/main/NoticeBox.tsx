import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { TextList } from '@molecules';
import { A, BorderContainer, MainNewsUl } from '@atoms';
import { useRecoilValue } from 'recoil';
import { languageState } from '@src/store/language/atom';
import { NoticeType, noticeState } from '../../../store/notice/notice';
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
  const language = useRecoilValue(languageState);
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  console.log(data);
  return (
    <BorderContainer radius={10} bgcolor="#eeeeee">
      {isMobile ? (
        <MainNewsUl type="mobile">
          {data.slice(0, 7).map((post) => {
            const date = new Date(post.createdDate!);
            const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            return (
              <A key={post.id} url={`/news/notice/${post.id}`}>
                <TextList
                  key={post.id}
                  date={dateStr}
                  title={language === 'English' ? post.titleKo : post.titleEn}
                  isCheck={post.highlightStatus === 1}
                />
              </A>
            );
          })}
        </MainNewsUl>
      ) : (
        <MainNewsUl type="notice">
          {data.map((post) => {
            const date = new Date(post.createdDate!);
            const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            return (
              <A key={post.id} url={`/news/notice/${post.id}`}>
                <TextList
                  key={post.id}
                  date={dateStr}
                  title={language === 'English' ? post.titleKo : post.titleEn}
                  isCheck={post.highlightStatus === 1}
                />
              </A>
            );
          })}
        </MainNewsUl>
      )}
    </BorderContainer>
  );
}
