import React from 'react';
import { MainNewsBox } from '@molecules';
import { useRecoilValue } from 'recoil';
import { Button, FlexContainer } from '@atoms';
import { NoticeType, noticeState } from '../../recoil/notice/notice';

export function MainNewsBoxList() {
  const notices = useRecoilValue<NoticeType[]>(noticeState);
  const test = notices.slice(notices.length - 8, notices.length);
  const test2 = notices.slice(notices.length - 6, notices.length);

  return (
    <FlexContainer justify="center" align="inherit">
      <MainNewsBox data={test} newsName="언론보도" />
      <FlexContainer direction="column" justify="space-between" margin="0 0 0 calc(20px * 0.8)">
        <MainNewsBox data={test2} newsName="BIKY레터" />
        <Button
          bgColor="#2153D4"
          weight="bold"
          width={630}
          size={1.5}
          color="white"
          radius="24px"
          padding="calc(16px * 0.8) 0px"
        >
          비키움(정기후원신청)
        </Button>
      </FlexContainer>
    </FlexContainer>
  );
}
