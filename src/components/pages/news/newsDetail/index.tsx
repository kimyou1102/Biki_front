import React, { useCallback, useState, useEffect } from 'react';
import { NewsTemplates } from '@templates';
import { NewsSection } from '@organisms';
import { Footer } from '@layout/Footer';
import { useLocation } from 'react-router-dom';
import { getPostByIdApi } from '../../../../apis/post/get-post-by-id-api';
import { PostType } from '../../../../models/post';

interface Props {
  type: string;
}

export function NewsDetail({ type }: Props) {
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
  const location = useLocation();
  console.log(location.state);
  const { id, title, count, date } = location.state;
  console.log(id, title, count, date);

  const postApi = useCallback(async () => {
    await getPostByIdApi(id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        // setNotices(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    postApi();
  }, [postApi]);

  let titleName = '';

  if (type === 'notice') {
    titleName = '공지사항';
  } else if (type === 'newsletter') {
    titleName = '뉴스레터';
  } else {
    titleName = '보도자료';
  }
  return (
    <>
      <NewsTemplates title={titleName}>
        {/* <NewsSection title={title} count={count} date={date} url={type} data={data} /> */}
        <NewsSection url={type} data={data} />
      </NewsTemplates>
      <Footer />
    </>
  );
}
