import React from 'react';
import { HeaderDefault } from '@atoms';
import { HeaderButtons } from '@molecules/buttonList';
import { ButtonsProps } from 'src/models/headerButton';

export function Header() {
  const lefttData: ButtonsProps[] = [
    { id: 1, name: 'Badge', url: '/' },
    { id: 2, name: 'Volunteer', url: '/' },
    { id: 3, name: 'Badge', url: '/' },
  ];

  const rightData: ButtonsProps[] = [
    { id: 1, name: '로그인', url: '/' },
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
