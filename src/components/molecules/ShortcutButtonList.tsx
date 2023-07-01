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
  position: fixed;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  display: grid;
  gap: calc(16px * 0.8);
  z-index: 100;

  #instagram:hover,
  #facebook:hover,
  #youtube:hover,
  #blog:hover,
  #newsletter:hover,
  #subscribe:hover {
    width: auto;
  }

  #instagram:hover .text_wrap,
  #facebook:hover .text_wrap,
  #youtube:hover .text_wrap,
  #blog:hover .text_wrap,
  #newsletter:hover .text_wrap,
  #subscribe:hover .text_wrap {
    display: flex;
  }

  #instagram:hover .shortcuts-button,
  #facebook:hover .shortcuts-button,
  #youtube:hover .shortcuts-button,
  #blog:hover .shortcuts-button,
  #newsletter:hover .shortcuts-button,
  #subscribe:hover .shortcuts-button {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
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
      <ShortcutsButton src={instagram} onClickEvent={() => handleButtonClick(snsLink.instagram)} name="인스타그램" />
      <ShortcutsButton src={facebook} onClickEvent={() => handleButtonClick(snsLink.facebook)} name="페이스북" />
      <ShortcutsButton src={youtube} onClickEvent={() => handleButtonClick(snsLink.youtube)} name="유튜브" />
      <ShortcutsButton src={blog} onClickEvent={() => handleButtonClick(snsLink.blog)} name="블로그" />
      <ShortcutsButton src={newsletter} onClickEvent={() => handleButtonClick(snsLink.newsletter)} name="뉴스레터" />
      <ShortcutsButton src={subscribe} onClickEvent={() => handleButtonClick(snsLink.subscribe)} name="구독" />
    </Container>
  );
}
