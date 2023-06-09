import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import PretendardBold from '../assets/fonts/Pretendard-Bold.woff2';
import PretendardMedium from '../assets/fonts/Pretendard-Medium.woff2';
import PretendardRegular from '../assets/fonts/Pretendard-Regular.woff2';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *, body {
        font-family: 'PretendardRegular'
    }

    html {
      --main-color : #288CB4;
      --main-slide-text-color : #FFF625;
    }

    a {
      text-decoration: none;
    }

    .none {
      overflow-y: hidden;
    }

    .dots_custom {
      width: 100%;
      position: absolute;
      bottom: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .dots_custom li {
      list-style: none;
      cursor: pointer;
      display: inline-block;
      margin: 0 3px;
      padding: 0;
    }
    
    .dots_custom li button {
      border: none;
      background: #d9d9d9;
      color: transparent;
      cursor: pointer;
      display: block;
      height: 11px;
      width: 11px;
      border-radius: 100%;
      padding: 0;
    }
    
    .dots_custom li.slick-active button {
      /* background-color: #74b743; */
      background-color: var(--main-color);
    }
    
    .dots_custom_archive {
      width: 100%;
      position: absolute;
      bottom: 0px;
      display: flex;
      align-items: center;
      justify-content: right;
      transform: translate(-12%, 0px);
    }
    
    .dots_custom_archive li {
      list-style: none;
      cursor: pointer;
      display: inline-block;
      margin: 0 3px;
      padding: 0;
    }
    
    .dots_custom_archive li button {
      border: none;
      background: #d9d9d9;
      color: transparent;
      cursor: pointer;
      display: block;
      height: calc(4px * 0.8);
      width: calc(40px * 0.8);
      padding: 0;
    }
    
    .dots_custom_archive li.slick-active button {
      /* background-color: #74b743; */
      background-color: var(--main-color);
    }

    .slick-next {
      right: 0px;
      bottom: 0px;
      top: auto;
    }
    
    .slick-prev::before,
    .slick-next::before {
      opacity: 0;
      display: none;
    }

    /* #paging .slick-slide {
      width: calc(200px * 0.8) !important;
    } */
      
    #paging .slick-slide > div {
      margin-right: calc(16px * 0.8);
    }

    @font-face {
        font-family: 'PretendardBold';
        src: local('PretendardBold'), url(${PretendardBold}) format('woff2');
        font-style: normal;
    }
    @font-face {
        font-family: 'PretendardMedium';
        src: local('PretendardMedium'), url(${PretendardMedium}) format('woff2');
        font-style: normal;
    }
    @font-face {
        font-family: 'PretendardRegular';
        src: local('PretendardRegular'), url(${PretendardRegular}) format('woff2');
        font-style: normal;
    }
`;

export default GlobalStyle;
