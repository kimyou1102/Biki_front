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
  top: 30px;
  right: 20px;
  display: grid;
  gap: calc(16px * 0.8);
  z-index: 100;
`;

export function ShortcutButtonList() {
  return (
    <Container>
      <ShortcutsButton src={instagram} />
      <ShortcutsButton src={facebook} />
      <ShortcutsButton src={youtube} />
      <ShortcutsButton src={blog} />
      <ShortcutsButton src={newsletter} />
      <ShortcutsButton src={subscribe} />
    </Container>
  );
}
