import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { HeaderDefault } from '@atoms';
import { HeaderButtons } from '@molecules/buttonList';
import { ButtonsProps } from 'src/models/headerButton';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import i18next from '../../../local/i18n';
import { languageState } from '../../../recoil/language/atom';

export function Header() {
  // const [language, setLanguage] = useState<string>('English');
  const [language, setLanguage] = useRecoilState<string>(languageState);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const setLanguageState = languageState

  const openLanguageMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeLanguageMenu = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    closeLanguageMenu();
  };

  const onClick = () => {
    if (language === 'English') {
      changeLanguage('en');
    } else {
      changeLanguage('ko');
    }
    setLanguage((prev) => (prev === 'English' ? '한국어' : 'English'));
  };

  const lefttData: ButtonsProps[] = [
    { id: 1, name: 'Guest', url: 'https://guest.biky.or.kr/' },
    { id: 2, name: 'Volunteer', url: 'http://volunteer.biky.s3-website.ap-northeast-2.amazonaws.com' },
    { id: 3, name: 'Badge', url: 'http://biky-badge-create.s3-website.ap-northeast-2.amazonaws.com/' },
  ];

  const rightData: ButtonsProps[] = [
    { id: 1, name: t(`nav.login`), url: '/login' },
    { id: 2, name: t(`nav.signup`), url: '/' },
    {
      id: 3,
      name: language,
      url: '/',
      onClick,
    },
  ];
  return (
    <HeaderDefault>
      {/* <HeaderButtons data={lefttData} color="var(--main-color)" /> */}
      <HeaderButtons data={[]} />
      <HeaderButtons data={rightData} />
    </HeaderDefault>
  );
}
