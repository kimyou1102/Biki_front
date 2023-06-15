import React, { useEffect, useCallback, useState } from 'react';
import { Section } from '@atoms';
import { Footer } from '@layout/Footer';
import { getBoardByParamApi } from '../../apis/board/get-board-by-param-api';
import '../../styles/content-styles.css';

interface Props {
  param: string;
}

export function FixTemplate({ param }: Props) {
  const [data, setData] = useState();

  const boardApi = useCallback(async () => {
    await getBoardByParamApi(param).then((res) => {
      console.log(res.data);
      setData(res.data.body);
    });
  }, [param]);

  useEffect(() => {
    boardApi();
  }, [boardApi]);

  console.log(data);

  return (
    <Section>
      <div className="ck-content" dangerouslySetInnerHTML={{ __html: data! }} />
    </Section>
    // <>
    //   <Section>
    //     <div className="ck-content" dangerouslySetInnerHTML={{ __html: data! }} />
    //   </Section>
    //   <Footer />
    // </>
  );
}
