import React, { useCallback, useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

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

  return (
    <>
      <NewsTemplates title={t(`news.notice`)}>
        <NewsListSection data={notices} page={page} setPage={setPage} limit={limit} total={total} />
      </NewsTemplates>
      {/* <Footer /> */}
    </>
  );
}
