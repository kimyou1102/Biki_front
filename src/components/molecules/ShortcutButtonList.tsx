import React from 'react';
import styled from 'styled-components';
import { ShortcutsButton } from './ShortcutsButton';
import instagram from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';
import youtube from '../../assets/images/youtube.png';
import blog from '../../assets/images/blog.png';
import newsletter from '../../assets/images/newsletter.png';
import subscribe from '../../assets/images/subscribe.png';

const Container = styled.ul`
  width: 80px;
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: grid;
  gap: calc(16px * 0.8);
  z-index: 100;
`;

export function ShortcutButtonList() {
  const snsLink = {
    instagram: 'https://www.instagram.com/biky_filmfest/',
    facebook: 'https://www.facebook.com/biky.festival/',
    youtube: 'https://www.youtube.com/@bikipr',
    blog: 'https://blog.naver.com/bikff',
    newsletter: 'https://www.biky.or.kr/news/newsletter',
    subscribe: 'https://www.biky.or.kr/news/notice/599',
  };

  function handleButtonClick(link: string) {
    window.open(link);
  }

  return (
    <Container>
      <ShortcutsButton src={instagram} onClickEvent={() => handleButtonClick(snsLink.instagram)} />
      <ShortcutsButton src={facebook} onClickEvent={() => handleButtonClick(snsLink.facebook)} />
      <ShortcutsButton src={youtube} onClickEvent={() => handleButtonClick(snsLink.youtube)} />
      <ShortcutsButton src={blog} onClickEvent={() => handleButtonClick(snsLink.blog)} />
      <ShortcutsButton src={newsletter} onClickEvent={() => handleButtonClick(snsLink.newsletter)} />
      <ShortcutsButton src={subscribe} onClickEvent={() => handleButtonClick(snsLink.subscribe)} />
    </Container>
  );
}
