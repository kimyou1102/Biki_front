import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useRecoilValue } from 'recoil';
import { languageState } from '../../store/language/atom';

export function SEOMetaTag() {
  const language = useRecoilValue(languageState);

  return (
    <Helmet>
      <meta
        name="description"
        content={
          language === 'English'
            ? '부산 국제 영화제 BIKY 입니다.'
            : 'This is BIKY from Busan International Film Festival.'
        }
      />
      <meta
        name="keywords"
        content={
          language === 'English'
            ? 'BIKY, 부산국제어린이청소년영화제, 영화의전당, 부산광역시 북구 및 중구 일원'
            : "BIKY, Busan International Children's and Youth Film Festival, Cinema Center, Buk-gu, Busan Metropolitan City and Jung-gu District"
        }
      />
      <meta property="og:url" content="https://www.biky.or.kr/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content={
          language === 'English'
            ? '제18회 부산국제어린이청소년영화제'
            : "18th Busan International Children's and Youth Film Festival"
        }
      />
      <meta
        property="og:description"
        content={
          language === 'English'
            ? '부산 국제 영화제 BIKY 입니다.'
            : 'This is BIKY from Busan International Film Festival.'
        }
      />
      {/* <meta property="og:image" content="{props.imgsrc}" /> */}
      <meta property="og:site_name" content="BIKY" />
      <meta property="og:locale" content={language === 'English' ? 'ko' : 'en'} />
    </Helmet>
  );
}
