import React, { useEffect, useCallback, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { MainNewsBox } from '@molecules';
import { useRecoilValue } from 'recoil';
import { Button, FlexContainer } from '@atoms';
import { NoticeType, noticeState } from '../../recoil/notice/notice';
import { getPostApi } from '../../apis/post/get-post-api';
import { PostType } from '../../models/post';

export function MainNewsBoxList() {
  // const notices = useRecoilValue<NoticeType[]>(noticeState);
  const [letter, setLetter] = useState<PostType[]>([]);
  const [release, setRelease] = useState<PostType[]>([]);
  const { t } = useTranslation();

  const postApi = useCallback(async () => {
    await getPostApi('언론보도', 0, 8)
      .then((res) => {
        console.log(res.data.content);
        setRelease(res.data.content.reverse());
      })
      .catch((err) => console.log(err));

    await getPostApi('뉴스레터', 0, 6)
      .then((res) => {
        console.log(res.data.content);
        setLetter(res.data.content.reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    postApi();
  }, [postApi]);

  return (
    <FlexContainer justify="center" align="inherit">
      <MainNewsBox newsName={t(`main.press`)} data={release} />
      <FlexContainer direction="column" justify="space-between" margin="0 0 0 calc(20px * 0.8)">
        <MainNewsBox newsName={t(`main.letter`)} data={letter} />
        <Button
          bgcolor="#2153D4"
          weight="bold"
          width={630}
          size={1.5}
          color="white"
          radius="24px"
          padding="calc(16px * 0.8) 0px"
        >
          {t(`main.donation`)}
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
}
