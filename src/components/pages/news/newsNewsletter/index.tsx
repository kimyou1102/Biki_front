import React, { useCallback, useState, useEffect } from 'react';
import { NewsListSection } from '@organisms';
import { NewsTemplates } from '@templates';
import { Footer } from '@layout/Footer';

import { getPostByTitleApi } from '@src/apis/post/get-post-by-title';
import { getPostApi } from '../../../../apis/post/get-post-api';

export function Newsletter() {
  const [news, setNews] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');

  // const initialLimit = 12;
  // const [limit, setLimit] = useState(12);
  const limit = 15;

  const postApi = useCallback(async () => {
    // 키워드가 있을 때
    if (searchKeyword !== '') {
      await getPostByTitleApi('뉴스레터', searchKeyword, page, limit)
        // await getPostApi('공지사항', page, limit)
        .then((res) => {
          setTotal(res.data.totalElements);
          setNews(res.data.content);
        })
        .catch((err) => console.log(err));
    } else {
      // 키워드가 없을 때
      await getPostApi('뉴스레터', page, limit)
        // await getPostApi('공지사항', page, limit)
        .then((res) => {
          setTotal(res.data.totalElements);
          setNews(res.data.content);
        })
        .catch((err) => console.log(err));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  async function handleSearchButtonClick() {
    await getPostByTitleApi('뉴스레터', searchKeyword, page, limit)
      // await getPostApi('공지사항', page, limit)
      .then((res) => {
        setTotal(res.data.totalElements);
        setNews(res.data.content);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    postApi();
  }, [postApi]);

  return (
    <NewsTemplates title="뉴스레터">
      <NewsListSection
        data={news}
        page={page}
        setPage={setPage}
        inputValue={searchKeyword}
        setInputValue={setSearchKeyword}
        onSearch={handleSearchButtonClick}
        limit={limit}
        total={total}
      />
    </NewsTemplates>
  );
}
