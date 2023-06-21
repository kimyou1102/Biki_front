import React, { useCallback, useState, useEffect } from 'react';
import { NewsListSection } from '@organisms';
import { NewsTemplates } from '@templates';
import { Footer } from '@layout/Footer';
import { getPostByTitleApi } from '@src/apis/post/get-post-by-title';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { noticeListState, noticeListInitialState } from '../../../../recoil/notice/notice';

import { getPostApi } from '../../../../apis/post/get-post-api';
import { PostType } from '../../../../models/post';

export function NewsNotice() {
  // const [notices, setNotices] = useState<any>([]);
  const [notices, setNotices] = useRecoilState<PostType[]>(noticeListState);
  const [noticeListInitial, setNoticeListInitial] = useRecoilState<PostType[]>(noticeListInitialState); // api에서 받아오는 걸로

  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const limit = 15;
  const [searchKeyword, setSearchKeyword] = useState('');

  console.log(page, limit);
  const postApi = useCallback(async () => {
    if (searchKeyword !== null) {
      await getPostByTitleApi('공지사항', searchKeyword, page, limit)
        .then((res) => {
          // console.log(res.data.content);
          // console.log(res.data);
          setTotal(res.data.totalElements);
          setNotices(res.data.content);
          setNoticeListInitial(res.data.content);
        })
        .catch((err) => console.log(err));
    } else {
      await getPostApi('공지사항', page, limit)
        .then((res) => {
          // console.log(res.data.content);
          // console.log(res.data);
          setTotal(res.data.totalElements);
          setNotices(res.data.content);
          setNoticeListInitial(res.data.content);
        })
        .catch((err) => console.log(err));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, setNoticeListInitial, setNotices]);

  async function handleSearchButtonClick() {
    await getPostByTitleApi('공지사항', searchKeyword, page, limit)
      .then((res) => {
        // console.log(res.data.content);
        // console.log(res.data);
        setTotal(res.data.totalElements);
        setNotices(res.data.content);
        setNoticeListInitial(res.data.content);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    postApi();
  }, [postApi]);

  return (
    <>
      <NewsTemplates title="공지사항">
        <NewsListSection
          data={notices}
          page={page}
          setPage={setPage}
          inputValue={searchKeyword}
          setInputValue={setSearchKeyword}
          onSearch={handleSearchButtonClick}
          limit={limit}
          total={total}
        />
      </NewsTemplates>
      {/* <Footer /> */}
    </>
  );
}
