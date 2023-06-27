import React, { useCallback, useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { NewsTemplates } from '@templates';
import { NewsSection } from '@organisms';
import { useParams } from 'react-router-dom';
import { addPostViewApi } from '@src/apis/post/add-post-view-api';
import { getPostByIdApi } from '../../../../apis/post/get-post-by-id-api';
import { PostType } from '../../../../models/post';

interface Props {
  type: string;
}
export function NewsDetail({ type }: Props) {
  const { id } = useParams();
  const [data, setData] = useState<PostType>({
    id: 0,
    board: '',
    category: '',
    titleKo: '',
    titleEn: '',
    body: '',
    status: 0,
    highlightStatus: 0,
    files: [],
  });
  const { t } = useTranslation();

  const postApi = useCallback(async () => {
    await getPostByIdApi(parseInt(id!, 10))
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
        // setNotices(res.data);
      })
      .catch((err) => console.log(err));

    // 조회수 추가
    await addPostViewApi(parseInt(id!, 10));
  }, [id]);

  useEffect(() => {
    postApi();
  }, [postApi]);

  let titleName = '';

  if (type === 'notice') {
    // eslint-disable-next-line prefer-destructuring
    titleName = t(`news.notice`);
  } else if (type === 'newsletter') {
    // eslint-disable-next-line prefer-destructuring
    titleName = t(`news.newsletter`);
  } else {
    // eslint-disable-next-line prefer-destructuring
    titleName = t(`news.press`);
  }

  return (
    <>
      <NewsTemplates title={titleName}>
        {/* <NewsSection title={title} count={count} date={date} url={type} data={data} /> */}
        <NewsSection url={type} data={data} />
      </NewsTemplates>
      {/* <Footer /> */}
    </>
  );
}
