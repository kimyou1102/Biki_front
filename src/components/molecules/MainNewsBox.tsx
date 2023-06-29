import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { BorderContainer, FlexContainer, MainNewsUl, Text, More, A } from '@atoms';
import { TextList, MainNewsBoxText } from '@molecules';
import { useRecoilValue } from 'recoil';
import { NoticeType, noticeState } from '../../store/notice/notice';
import { PostType } from '../../models/post';
import { getPostApi } from '../../apis/post/get-post-api';
import { languageState } from '../../store/language/atom';

interface Props {
  data: PostType[];
  newsName: string;
}

export function MainNewsBox({ data, newsName }: Props) {
  const language = useRecoilValue(languageState);
  const { t } = useTranslation();

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return isMobile ? (
    <FlexContainer direction="column">
      <Text size={1.5 / 0.8} weight="bold" margin="0 0 16px 0">
        {newsName}
      </Text>
      <BorderContainer radius={16} bgcolor="white" border="#74B743" padding="12px 18px">
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
            );
          })}
        </MainNewsUl>
      </BorderContainer>
    </FlexContainer>
  ) : (
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
          );
        })}
      </MainNewsUl>
    </BorderContainer>
  );
}
