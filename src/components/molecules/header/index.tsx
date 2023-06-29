import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { HeaderDefault } from '@atoms';
import { HeaderButtons } from '@molecules/buttonList';
import { ButtonsProps } from 'src/models/headerButton';
import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
import i18next from '../../../local/i18n';
import { languageState } from '../../../store/language/atom';

interface Props {
  accountMenus: ButtonsProps[];
}

export function Header({ accountMenus }: Props) {
  const [isLogin, setLogin] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const [language, setLanguage] = useRecoilState<string>(languageState);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (cookies.access_token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [cookies.access_token]);

  const onLogoutClick = () => {
    if (cookies.access_token) {
      removeCookie('access_token');
    } else {
      navigate('/login');
    }
  };

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
    { id: 1, name: isLogin ? t(`nav.logout`) : t(`nav.login`), url: '/login', onClick: onLogoutClick },
    { id: 2, name: isLogin ? t(`nav.mypage`) : t(`nav.signup`), url: '/signup' },
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
      <HeaderButtons data={accountMenus} />
    </HeaderDefault>
  );
}
