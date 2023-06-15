import React from 'react';
import styled from 'styled-components';
import { Img, FlexContainer, Li } from '@atoms';
import { FooterBannerList } from '@organisms';
import bikiLogo from '../../assets/images/biki_white_logo.png';
import footer from '../../assets/images/footer.png';

const Container = styled.div`
  /* margin-top: 100px; */
`;

const FooterWrap = styled.div`
  background-color: var(--main-color);
  backdrop-filter: blur(2px);
  background-image: url(${footer});
  background-blend-mode: overlay;
  padding: calc(68.8px) calc(94.4px);

  ul {
    display: grid;
    grid-gap: 8px;
    margin-left: calc(82px * 0.8);
    text-align: left;
  }
`;

const Text = styled.span`
  text-decoration: underline;
  text-underline-position: under;
`;
export function Footer() {
  return (
    <Container>
      <FooterBannerList />
      <FooterWrap>
        <FlexContainer align="center">
          <Img alt="하단로고" src={bikiLogo} width={350} height={110} />
          <ul>
            <Li color="white">
              (48058) 부산광역시 해운대구 수영강변대로 120 영화의전당 비프힐 2층 (사)부산국제어린이청소년영화제 사무국
            </Li>
            <Li color="white">전화번호 : 051. 743. 7652</Li>
            <Li color="white">팩스 : 051. 711. 7412</Li>
            <Li color="white">이메일 : info@biky.or.kr</Li>
            <Li color="white">
              <Text>이용약관 | 개인정보보호방침 | 이메일무단수집거부</Text>
            </Li>
          </ul>
        </FlexContainer>
      </FooterWrap>
    </Container>
  );
}
