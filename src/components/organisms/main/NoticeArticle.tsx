import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { NoticeBox } from '@organisms';
import { NoticeHeader } from '@molecules';
import { getPostApi } from '@src/apis/post/get-post-api';
import { useTranslation } from 'react-i18next';
import { PostType } from '../../../models/post';

const StyledArticle = styled.article<{ type: string }>`
  width: ${(props) => (props.type === 'mobile' ? '100%' : 'calc(1280px * 0.8)')};
  margin: ${(props) => (props.type === 'mobile' ? '24px 0 0 0' : '5rem auto 7rem')};
`;

export function NoticeArticle() {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const [posts, setPosts] = useState<PostType[]>([]);
  const [mobilePosts, setMobilePosts] = useState<PostType[]>([]);
  const { t } = useTranslation();

  const postApi = useCallback(async () => {
    await getPostApi('공지사항', 0, 20)
      .then((res) => {
        setPosts(res.data.content.slice(0, 12));
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
    <StyledArticle type={isMobile ? 'mobile' : 'pc'}>
      <NoticeHeader title={t(`main.notice`)} url="news/notice" />
      <NoticeBox data={isMobile ? mobilePosts : posts} />
    </StyledArticle>
  );
}
