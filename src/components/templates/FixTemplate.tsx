import React, { useEffect, useCallback, useState } from 'react';
import { Section } from '@atoms';
import { Footer } from '@layout/Footer';
import { Helmet } from 'react-helmet-async';
import { getBoardByParamApi } from '../../apis/board/get-board-by-param-api';
import '../../styles/content-styles.css';

interface Props {
  param: string;
}

export function FixTemplate({ param }: Props) {
  const [data, setData] = useState('');
  const [title, setTitle] = useState('');

  const boardApi = useCallback(async () => {
    await getBoardByParamApi(param)
      .then((res) => {
        console.log(res.data);
        setData(res.data.body);
        setTitle(res.data.subCategory);
      })
      .catch((err) => console.log(err));
  }, [param]);

  useEffect(() => {
    boardApi();
  }, [boardApi]);

  const start = data.indexOf('<strong>');
  const end = data.indexOf('</strong>');

  return (
    <>
      <Helmet>
        <title>{title === '' ? data.slice(start, end).replace('<strong>', '') : title}</title>
      </Helmet>
      <Section>
        <div className="ck-content" dangerouslySetInnerHTML={{ __html: data! }} />
      </Section>
    </>
  );
}
