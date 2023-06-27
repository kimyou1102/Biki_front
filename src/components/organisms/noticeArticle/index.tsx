import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { NoticeBox } from '@organisms/noticeBox';
import { NoticeHeader } from '@molecules';
// import { getPostByIdApi } from '@src/apis/post/get-post-by-id-api';
import { getPostApi } from '@src/apis/post/get-post-api';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { PostType } from '../../../models/post';

const StyledArticel = styled.article<{ type: string }>`
  width: ${(props) => (props.type === 'mobile' ? '100%' : 'calc(1280px * 0.8)')};
  margin: ${(props) => (props.type === 'mobile' ? '24px 0 0 0' : '5rem auto 7rem')};
`;

export function NoticeArticel() {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const [posts, setPosts] = useState<PostType[]>([]);
  const [mobilePosts, setMobilePosts] = useState<PostType[]>([]);
  const { t } = useTranslation();

  const postApi = useCallback(async () => {
    await getPostApi('공지사항', 0, 20)
      .then((res) => {
        const sortedPosts = res.data.content.slice(0, 12).sort((a: any, b: any) => {
          if (a.highlightStatus < b.highlightStatus) {
            return 1;
          }
          if (a.highlightStatus > b.highlightStatus) {
            return -1;
          }

          return 0;
        });

        setPosts(sortedPosts);
        const arr = res.data.content;
        const newArr: any[] = [];
        let count = 0;
        res.data.content.forEach((e: any) => {
          if (e.highlightStatus === 1 && count < 2) {
            newArr.push(e);
            count += 1;
            console.log(count);
          } else if (e.highlightStatus === 0) {
            newArr.push(e);
          }
        });
        setMobilePosts(newArr);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    postApi();
  }, [postApi]);
  // t(`nav.login`)
  return (
    <StyledArticel type={isMobile ? 'mobile' : 'pc'}>
      <NoticeHeader title={t(`main.notice`)} url="news/notice" />
      <NoticeBox data={isMobile ? mobilePosts : posts} />
    </StyledArticel>
  );
}
