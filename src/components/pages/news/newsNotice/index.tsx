import React, { useCallback, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { NewsListSection } from '@organisms';
import { NewsTemplates } from '@templates';
import { Box, CircularProgress, LinearProgress } from '@mui/material';
import { Footer } from '@layout/Footer';
import { getPostByTitleApi } from '@src/apis/post/get-post-by-title';
import { useRecoilState } from 'recoil';
import { noticeListState, noticeListInitialState } from '../../../../store/notice/notice';
import { getPostApi } from '../../../../apis/post/get-post-api';
import { PostType } from '../../../../models/post';

export function NewsNotice() {
  // const [notices, setNotices] = useState<any>([]);
  const [notices, setNotices] = useRecoilState<PostType[]>(noticeListState);
  const [noticeListInitial, setNoticeListInitial] = useRecoilState<PostType[]>(noticeListInitialState); // api에서 받아오는 걸로
  const { t } = useTranslation();

  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const limit = 15;
  const [searchKeyword, setSearchKeyword] = useState('');

  console.log(page, limit);

  const postApi = useCallback(async () => {
    if (searchKeyword !== '') {
      await getPostByTitleApi('공지사항', searchKeyword, page, limit)
        .then((res) => {
          setTotal(res.data.totalElements);
          setNotices(res.data.content);
          setNoticeListInitial(res.data.content);
          setIsLoading(false);
          setPage(0);
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
          setIsLoading(false);
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
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    postApi();
  }, [postApi]);

  return (
    <>
      <NewsTemplates title={t(`news.notice`)}>
        {isLoading ? (
          <Box width="100%" height="50vh" display="flex" justifyContent="center" alignItems="center">
            <CircularProgress color="success" />
          </Box>
        ) : (
          <NewsListSection
            data={notices}
            page={page}
            setPage={setPage}
            inputValue={searchKeyword}
            setInputValue={setSearchKeyword}
            onSearch={() => handleSearchButtonClick()}
            limit={limit}
            total={total}
          />
        )}
      </NewsTemplates>
      {/* <Footer /> */}
    </>
  );
}
