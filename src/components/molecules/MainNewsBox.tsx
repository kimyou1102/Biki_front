import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { BorderContainer, FlexContainer, MainNewsUl, Text, More, A } from '@atoms';
import { TextList, MainNewsBoxText } from '@molecules';
import { useRecoilValue } from 'recoil';
import { NoticeType, noticeState } from '../../recoil/notice/notice';
import { PostType } from '../../models/post';
import { getPostApi } from '../../apis/post/get-post-api';
import { languageState } from '../../recoil/language/atom';

interface Props {
  data: PostType[];
  newsName: string;
}

export function MainNewsBox({ data, newsName }: Props) {
  const language = useRecoilValue(languageState);
  const { t } = useTranslation();

  return (
    <BorderContainer
      radius={10}
      bgcolor="white"
      border="#74B743"
      width={630}
      height={newsName === '언론보도' ? 482 : 396}
      padding="calc(26px * 0.8) calc(31px * 0.8) calc(16px * 0.8) calc(31px * 0.8)"
    >
      <FlexContainer justify="space-between">
        <Text size={1.5} weight="bold">
          {newsName}
        </Text>
        <More>
          <A url={newsName === '언론보도' ? 'news/pressrelease' : 'news/newsletter'}>{t(`main.more`)}</A>
        </More>
      </FlexContainer>

      <MainNewsUl type="news">
        {data.map((post) => {
          const date = new Date(post.createdDate!);
          const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
          return (
            <MainNewsBoxText
              key={post.id}
              id={post.id}
              date={dateStr}
              title={language === 'English' ? post.titleKo : post.titleEn}
              url={newsName === '언론보도' ? 'news/pressrelease' : 'news/newsletter'}
            />
            // <MainNewsBoxText key={post.id} date={dateStr} title={post.titleKo} isCheck={post.highlightStatus === 1} />
          );
        })}
        {/* {data.map(({ id, date, title, isCheck }) => (
          <MainNewsBoxText key={id} date={date} title={title} />
        ))} */}
      </MainNewsUl>
    </BorderContainer>
  );
}
