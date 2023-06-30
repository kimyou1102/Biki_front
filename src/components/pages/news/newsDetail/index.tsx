import React, { useCallback, useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { NewsTemplates } from '@templates';
import { NewsSection } from '@organisms';
import { useNavigate, useParams } from 'react-router-dom';
import { addPostViewApi } from '@src/apis/post/add-post-view-api';
import { getPostByIdApi } from '../../../../apis/post/get-post-by-id-api';
import { PostType } from '../../../../models/post';

interface Props {
  type: string;
}
export function NewsDetail({ type }: Props) {
  const navigate = useNavigate();
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
        const linkCommandPattern = /gomylinkcommand\[(.*?)\]/i;
        const linkCommandMatch = res.data.body.match(linkCommandPattern);

        if (linkCommandMatch) {
          const url = linkCommandMatch[1];
          window.open(url, '_blank');
          navigate(-1);
        } else {
          setData(res.data);
        }
      })
      .catch((err) => console.log(err));

    // 조회수 추가
    await addPostViewApi(parseInt(id!, 10));
  }, [id, navigate]);

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
  } else if (type === 'pressrelease]') {
    // eslint-disable-next-line prefer-destructuring
    titleName = t(`news.press`);
  } else {
    // eslint-disable-next-line prefer-destructuring
    titleName = t(`news.newsrelease`);
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
