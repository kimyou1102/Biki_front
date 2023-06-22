import React from 'react';
import { HeaderDefault } from '@atoms';
import { HeaderButtons } from '@molecules/buttonList';
import { ButtonsProps } from 'src/models/headerButton';

export function Header() {
  const lefttData: ButtonsProps[] = [
    { id: 1, name: 'Guest', url: 'https://guest.biky.or.kr/' },
    { id: 2, name: 'Volunteer', url: 'http://volunteer.biky.s3-website.ap-northeast-2.amazonaws.com' },
    { id: 3, name: 'Badge', url: 'http://biky-badge-create.s3-website.ap-northeast-2.amazonaws.com/' },
  ];

  const rightData: ButtonsProps[] = [
    { id: 1, name: '로그인', url: '/login' },
    { id: 2, name: '회원가입', url: '/' },
    { id: 3, name: 'English', url: '/' },
  ];
  return (
    <HeaderDefault>
      <HeaderButtons data={lefttData} color="var(--main-color)" />
      <HeaderButtons data={rightData} />
    </HeaderDefault>
  );
}
