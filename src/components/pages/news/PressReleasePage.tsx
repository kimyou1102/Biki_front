import React, { useCallback, useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { NewsListSection } from '@organisms';
import { NewsTemplates } from '@templates';
import { Footer } from '@layout/Footer';
import { getPostApi } from '../../../apis/post/get-post-api';

export function PressReleasePage() {
  const [news, setNews] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const { t } = useTranslation();
  // const initialLimit = 12;
  // const [limit, setLimit] = useState(12);
  const limit = 15;

  const postApi = useCallback(async () => {
    await getPostApi('언론보도', page, limit)
      // await getPostApi('공지사항', page, limit)
      .then((res) => {
        console.log('언론보도 :', res.data.content);
        setTotal(res.data.totalElements);
        setNews(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [page]);

  useEffect(() => {
    postApi();
  }, [postApi]);

  return (
    <NewsTemplates title={t(`news.press`)}>
      <NewsListSection data={news} page={page} setPage={setPage} limit={limit} total={total} />
    </NewsTemplates>
  );
}
