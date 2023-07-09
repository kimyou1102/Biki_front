import React, { useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { MainNewsBox } from '@molecules';
import { Button, FlexContainer } from '@atoms';
import { getPostApi } from '../../../apis/post/get-post-api';
import { PostType } from '../../../models/post';

// const Container = styled.div<{ margin: number }>`
//   margin-top: ${(props) => `${props.margin}px`}
// `;

const Wrap = styled.div<{ margin: number }>`
  margin-top: ${(props) => `${props.margin}px`};
`;

export function MainNewsBoxList() {
  // const notices = useRecoilValue<NoticeType[]>(noticeState);
  const [letter, setLetter] = useState<PostType[]>([]);
  const [release, setRelease] = useState<PostType[]>([]);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  const postApi = useCallback(async () => {
    await getPostApi('언론보도', 0, 8)
      .then((res) => {
        console.log(res.data.content);
        setRelease(res.data.content);
      })
      .catch((err) => console.log(err));

    await getPostApi('뉴스레터', 0, isMobile ? 8 : 6)
      .then((res) => {
        console.log(res.data.content);
        setLetter(res.data.content);
      })
      .catch((err) => console.log(err));
  }, [isMobile]);

  useEffect(() => {
    postApi();
  }, [postApi]);

  return isMobile ? (
    <>
      <Wrap margin={52}>
        <MainNewsBox newsName={t(`main.press`)} data={release} />
      </Wrap>
      <Wrap margin={46}>
        <MainNewsBox newsName={t(`main.letter`)} data={letter} />
      </Wrap>
      <Wrap margin={24}>
        <Button
          bgcolor="#2153D4"
          weight="bold"
          size={1.5}
          color="white"
          radius="24px"
          padding="calc(16px * 0.8) 0px"
          className="full"
          onClick={() => window.open('https://www.ihappynanum.com/Nanum/B/IGIUW1BEC8')}
        >
          {t(`main.donation`)}
        </Button>
      </Wrap>
    </>
  ) : (
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
          onClick={() => window.open('https://www.ihappynanum.com/Nanum/B/IGIUW1BEC8')}
        >
          {t(`main.donation`)}
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
}
