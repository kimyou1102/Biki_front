import React, { useCallback, useState, useEffect } from 'react';
import { NewsListSection } from '@organisms';
import { NewsTemplates } from '@templates';
import { Footer } from '@layout/Footer';
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

  console.log(page, limit);
  const postApi = useCallback(async () => {
    await getPostApi('공지사항', page, limit)
      .then((res) => {
        // console.log(res.data.content);
        // console.log(res.data);
        setTotal(res.data.totalElements);
        setNotices(res.data.content);
        setNoticeListInitial(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [page, setNoticeListInitial, setNotices]);

  useEffect(() => {
    postApi();
  }, [postApi]);

  const testData = [
    { id: 1, num: 16, title: '부산국제어린이청소년 영화제, 제일 최신 어쩌구 글', count: 324, date: '2023-12-12' },
    { id: 2, num: 15, title: '부산국제어린이청소년 영화제, 둘 어쩌구 글', count: 324, date: '2023-12-10' },
    { id: 3, num: 14, title: '부산국제어린이청소년 영화제, 셋 어쩌구 글', count: 324, date: '2023-12-04' },
    { id: 4, num: 13, title: '부산국제어린이청소년 영화제, 넷 어쩌구 글', count: 324, date: '2023-12-01' },
    { id: 5, num: 12, title: '부산국제어린이청소년 영화제, 다섯 어쩌구 글', count: 324, date: '2023-11-12' },
    { id: 6, num: 11, title: '부산국제어린이청소년 영화제, 여섯 머시기 어쩌구 글', count: 324, date: '2023-11-12' },
    { id: 7, num: 10, title: '부산국제어린이청소년 영화제, 일곱 어쩌구 글', count: 324, date: '2023-11-12' },
  ];

  return (
    <>
      <NewsTemplates title="공지사항">
        <NewsListSection data={notices} page={page} setPage={setPage} limit={limit} total={total} />
      </NewsTemplates>
      {/* <Footer /> */}
    </>
  );
}
