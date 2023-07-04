import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { Img, FlexContainer, Li } from '@atoms';
import { FooterBannerList } from '@organisms';
import bikiLogo from '../../assets/images/biki_white_logo.png';
import footer from '../../assets/images/footer.png';

const Container = styled.div`
  /* margin-top: 100px; */
`;

const FooterWrap = styled.div<{ isMobile?: boolean }>`
  background-color: var(--main-color);
  backdrop-filter: blur(2px);
  background-image: url(${footer});
  background-blend-mode: overlay;
  padding: ${(props) => (props.isMobile ? '32px 16px' : 'calc(50px) calc(94.4px)')};

  ul {
    display: grid;
    grid-gap: 8px;
    margin-top: ${(props) => (props.isMobile ? '27px' : '0px')};
    margin-left: ${(props) => (props.isMobile ? '0px' : 'calc(82px * 0.8)')};
    text-align: left;
  }
`;

const Text = styled.span`
  text-decoration: underline;
  text-underline-position: under;
`;
export function Footer() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return isMobile ? (
    <Container>
      <FooterBannerList />
      <FooterWrap isMobile={isMobile}>
        <FlexContainer align="left" direction="column">
          <Img alt="하단로고" src={bikiLogo} width={103 / 0.8} height={32 / 0.8} />
          <ul>
            <Li size={0.75} color="white">
              {t(`footer.address`)}
            </Li>
            <Li size={0.75} color="white">
              {t(`footer.phone`)} : 051. 743. 7652
            </Li>
            <Li size={0.75} color="white">
              {t(`footer.fax`)} : 051. 711. 7412
            </Li>
            <Li size={0.75} color="white">
              {t(`footer.email`)} : info@biky.or.kr
            </Li>
            <Li size={0.75} color="white">
              <Text>
                {t(`footer.term`)} | {t(`footer.privacy`)} | {t(`footer.emailCollection`)}
              </Text>
            </Li>
          </ul>
        </FlexContainer>
      </FooterWrap>
    </Container>
  ) : (
    <Container>
      <FooterBannerList />
      <FooterWrap>
        <FlexContainer align="center">
          <Img alt="하단로고" src={bikiLogo} width={350 * 0.7} height={110 * 0.7} />
          <ul>
            <Li color="white">{t(`footer.address`)}</Li>
            <Li color="white">{t(`footer.phone`)} : 051. 743. 7652</Li>
            <Li color="white">{t(`footer.fax`)} : 051. 711. 7412</Li>
            <Li color="white">{t(`footer.email`)} : info@biky.or.kr</Li>
            <Li color="white">
              <Text>
                {t(`footer.term`)} | {t(`footer.privacy`)} | {t(`footer.emailCollection`)}
              </Text>
            </Li>
          </ul>
        </FlexContainer>
      </FooterWrap>
    </Container>
  );
}
