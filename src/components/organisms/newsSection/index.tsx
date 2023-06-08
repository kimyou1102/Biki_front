import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import { useNavigate } from 'react-router-dom';
import { Button, FlexContainer, Text, Span } from '@atoms';
import { PostType } from '../../../apis/post/model';

// interface Props {
//   title: string;
//   count: number;
//   date: string;
//   url: string;
//   data: PostType;
// }

interface Props {
  data: PostType;
  url: string;
}

// export function NewsSection({ title, count, date, url, data }: Props) {
export function NewsSection({ url, data }: Props) {
  const navigate = useNavigate();
  const [element, setElement] = useState<any>('');
  // let url = '';
  const count = 3;
  const createdDated = '2023-06-01';

  console.log(data);
  console.log(data.body);

  useEffect(() => {
    setElement(data.body);
    console.log(data.body);
  }, [data.body]);

  return (
    <div>
      <Button
        border="#DBDBDB"
        weight="bold"
        size={1.25}
        radius="10px"
        width={88}
        height={48}
        display="block"
        margin="22px 0 calc(33px * 0.8) auto"
        onClick={() => navigate(`/news/${url}`)}
      >
        목록
      </Button>
      <FlexContainer justify="space-between" align="center" margin="0 0 0.5rem 0">
        <Text size={2}>{data.titleKo}</Text>
        <Span>조회수 {count}</Span>
      </FlexContainer>
      <Span>{createdDated.replace(/-/gi, ' / ')}</Span>
      <div style={{ marginTop: 'calc(82px * 0.8)' }}>{element && <Viewer initialValue={element} />}</div>
    </div>
  );
}
