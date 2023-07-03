import React from 'react';
import styled from 'styled-components';
import { Img, Span } from '@atoms';

interface Props {
  src: string;
  onClickEvent?: () => void;
  name: string;
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50px;
  width: calc(80px * 0.8);
  height: calc(80px * 0.8);
  background: white;
  cursor: pointer;
  margin: 0 0 0 auto;
`;

const TextWrap = styled.div`
  display: none;
  background: white;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  align-items: center;
  padding: 16px 0px 16px 16px;
`;

const Li = styled.li`
  display: flex;
  width: 64px;
  background: transparent;
  flex-direction: row-reverse;
  border-radius: 50px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.45);
  margin: 0 0 0 auto;
  cursor: pointer;
`;

export function ShortcutsButton({ src, onClickEvent, name }: Props) {
  const nameObj: any = {
    인스타그램: 'instagram',
    페이스북: 'facebook',
    유튜브: 'youtube',
    블로그: 'blog',
    뉴스레터: 'newsletter',
    구독: 'subscribe',
  };

  return (
    <Li id={nameObj[name]} onClick={onClickEvent}>
      <StyledButton className="shortcuts-button">
        <Img src={src} alt="바로가기" width={40} height={40} />
      </StyledButton>
      <TextWrap className="text_wrap">
        <Span size={1.25}>{name}</Span>
      </TextWrap>
    </Li>
  );
}
