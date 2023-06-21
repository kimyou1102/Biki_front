import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import { NoticeBox } from '@organisms/noticeBox';
import { NoticeHeader } from '@molecules';
// import { getPostByIdApi } from '@src/apis/post/get-post-by-id-api';
import { getPostApi } from '@src/apis/post/get-post-api';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { PostType } from '../../../models/post';

const StyledArticel = styled.article`
  width: calc(1280px * 0.8);
  margin: 5rem auto 7rem;
`;

export function NoticeArticel() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const { t } = useTranslation();

  const postApi = useCallback(async () => {
    await getPostApi('공지사항', 0, 12)
      .then((res) => {
        console.log(res.data.content);
        setPosts(res.data.content.reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    postApi();
  }, [postApi]);
  // t(`nav.login`)
  return (
    <StyledArticel>
      <NoticeHeader title={t(`main.notice`)} url="news/notice" />
      <NoticeBox data={posts} />
    </StyledArticel>
  );
}
