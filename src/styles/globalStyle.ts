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

    a {
      text-decoration: none;
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
      background-color: #74b743;
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
