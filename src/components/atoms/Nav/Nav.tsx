import styled from 'styled-components';

export const StyledNav = styled.nav<{ isMobile?: boolean }>`
  /* display: flex;
  align-items: center;
  border-bottom: 1px solid #dbdbdb; */

  .wrap {
    display: flex;
    max-width: calc(1280px * 0.8);
    min-width: calc(1280px * 0.8);
    margin: auto;

    align-items: center;
  }

  &.mobile {
    max-height: 100vh;
    overflow-y: auto;
  }

  #biky:hover,
  #education:hover,
  #program:hover,
  #event:hover,
  #forum:hover,
  #news:hover,
  #archive:hover,
  #contact:hover {
    color: var(--main-color);
    padding: ${(props) => (props.isMobile ? '0px 16px' : '0px')};
  }

  #biky:hover #name,
  #education:hover #name,
  #program:hover #name,
  #event:hover #name,
  #forum:hover #name,
  #news:hover #name,
  #archive:hover #name,
  #contact:hover #name {
    padding: 12px 0px;
  }

  #biky:hover #menu_wrap,
  #education:hover #menu_wrap,
  #program:hover #menu_wrap,
  #event:hover #menu_wrap,
  #forum:hover #menu_wrap,
  #news:hover #menu_wrap,
  #archive:hover #menu_wrap,
  #contact:hover #menu_wrap {
    display: flex;
  }

  position: relative;
`;
