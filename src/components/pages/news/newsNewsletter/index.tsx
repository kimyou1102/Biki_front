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

  console.log('뉴스레터 : ', news);

  useEffect(() => {
    postApi();
  }, [postApi]);

  return (
    <NewsTemplates title="뉴스레터">
      <NewsListSection data={news} page={page} setPage={setPage} limit={limit} total={total} />
    </NewsTemplates>
  );
}
