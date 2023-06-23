import React, { useCallback, useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { NewsListSection } from '@organisms';
import { NewsTemplates } from '@templates';
import { Footer } from '@layout/Footer';
import { Box, CircularProgress } from '@mui/material';
import { getPostByTitleApi } from '@src/apis/post/get-post-by-title';
import { getPostApi } from '../../../../apis/post/get-post-api';

export function Newsletter() {
  const [news, setNews] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();
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
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      // 키워드가 없을 때
      await getPostApi('뉴스레터', page, limit)
        // await getPostApi('공지사항', page, limit)
        .then((res) => {
          setTotal(res.data.totalElements);
          setNews(res.data.content);
          setIsLoading(false);
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
    <NewsTemplates title={t(`news.newsletter`)}>
      {isLoading ? (
        <Box width="100%" height="50vh" display="flex" justifyContent="center" alignItems="center">
          <CircularProgress color="success" />
        </Box>
      ) : (
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
      )}
    </NewsTemplates>
  );
}
