import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import { NoticeBox } from '@organisms/noticeBox';
import { NoticeHeader } from '@molecules';
// import { getPostByIdApi } from '@src/apis/post/get-post-by-id-api';
import { getPostApi } from '@src/apis/post/get-post-api';
import { PostType } from '../../../models/post';

const StyledArticel = styled.article`
  width: calc(1280px * 0.8);
  margin: 5rem auto 7rem;
`;

export function NoticeArticel() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const postApi = useCallback(async () => {
    await getPostApi('공지사항', 0, 12)
      .then((res) => {
        const sortedPosts = res.data.content.sort((a: any, b: any) => {
          if (a.highlightStatus < b.highlightStatus) {
            return 1;
          }
          if (a.highlightStatus > b.highlightStatus) {
            return -1;
          }

          return 0;
        });

        setPosts(sortedPosts);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    postApi();
  }, [postApi]);

  return (
    <StyledArticel>
      <NoticeHeader title="공지사항" url="news/notice" />
      <NoticeBox data={posts} />
    </StyledArticel>
  );
}
