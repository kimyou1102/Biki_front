import React, { useCallback, useState, useEffect } from 'react';
import { NewsListSection } from '@organisms';
import { NewsTemplates } from '@templates';
import { Footer } from '@layout/Footer';
import { getPostApi } from '../../../../apis/post/get-post-api';

export function Newsletter() {
  const [news, setNews] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  // const initialLimit = 12;
  // const [limit, setLimit] = useState(12);
  const limit = 3;

  const postApi = useCallback(async () => {
    await getPostApi('뉴스레터', page, limit)
      // await getPostApi('공지사항', page, limit)
      .then((res) => {
        setTotal(res.data.totalElements);
        setNews(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [page]);

  useEffect(() => {
    postApi();
  }, [postApi]);

  const testData2 = [
    { id: 1, num: 16, title: '뉴스레터, 제일 최신 어쩌구 글', count: 324, date: '2023-12-12' },
    { id: 2, num: 15, title: '뉴스레터, 둘 어쩌구 글', count: 324, date: '2023-12-10' },
    { id: 3, num: 14, title: '뉴스레터, 셋 어쩌구 글', count: 324, date: '2023-12-04' },
    { id: 4, num: 13, title: '뉴스레터, 넷 어쩌구 글', count: 324, date: '2023-12-01' },
    { id: 5, num: 12, title: '뉴스레터, 다섯 어쩌구 글', count: 324, date: '2023-11-12' },
    { id: 6, num: 11, title: '뉴스레터, 여섯 머시기 어쩌구 글', count: 324, date: '2023-11-12' },
    { id: 7, num: 10, title: '뉴스레터, 일곱 어쩌구 글', count: 324, date: '2023-11-12' },
  ];
  return (
    <>
      <NewsTemplates title="뉴스레터">
        <NewsListSection data={news} page={page} setPage={setPage} limit={limit} total={total} />
      </NewsTemplates>
      <Footer />
    </>
  );
}
