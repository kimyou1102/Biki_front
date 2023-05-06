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
