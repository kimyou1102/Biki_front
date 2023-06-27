/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { Span, Li, FlexContainer, Img } from '@atoms';
import noticGo from '../../assets/images/noticeGo.png';

interface Props {
  date: string;
  title: string;
  id: number;
  url: string;
}

const IconWrap = styled.div`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
`;

export function MainNewsBoxText({ date, title, id, url }: Props) {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return isMobile ? (
    <Li outline="#767676" padding="8px 0px" onClick={() => navigate(`${url}/${id}`)}>
      <div style={{ position: 'relative' }}>
        <div>
          <Span display="inline-block" weight="bold" className="text-overflow" textoverflow={20}>
            {isMobile ? title : title !== null ? (title.length > 42 ? `${title.slice(0, 42)}...` : title) : ''}
          </Span>
          <Span display="inline-block" color="#767676" weight="lighter" size={0.5} margin="0 calc(40px * 0.8) 0 0">
            {date.replace(/\//gi, '.').substring(2)}
          </Span>
        </div>
        <IconWrap>
          <Img alt="공지바로가기" src={noticGo} width={20 / 0.8} height={20 / 0.8} />
        </IconWrap>
      </div>
    </Li>
  ) : (
    <Li outline="#767676" padding="16px 0 16px 0" onClick={() => navigate(`${url}/${id}`)}>
      <FlexContainer>
        <Span weight="lighter" size={0.5} margin="0 calc(40px * 0.8) 0 0">
          {date.replace(/\//gi, '.').substring(2)}
        </Span>
        <Span weight="bold" className="text-overflow">
          {isMobile ? title : title !== null ? (title.length > 42 ? `${title.slice(0, 42)}...` : title) : ''}
        </Span>
      </FlexContainer>
    </Li>
  );
}
