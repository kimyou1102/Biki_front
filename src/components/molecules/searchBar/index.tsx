import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { Input, Button, Img, BorderContainer } from '@atoms';
import { useRecoilState } from 'recoil';
import { filmInputState, sketchInputState } from '../../../recoil/archive/atome';
import { movieState, testMovie } from '../../../recoil/movies';
import { MovieInfo } from '../../../models/movie';
import search from '../../../assets/images/Search.png';
import mobileSearch from '../../../assets/images/mobileSearch.png';

interface Props {
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  color?: string;
  radius?: number;
  width?: number;
  height?: number;
  placeholder?: string;
}

const Form = styled.form<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? '100%' : 'auto')};
`;

export function SearchBar({
  type = 'archive',
  value,
  onChange,
  onSearch,
  color,
  radius,
  width,
  height,
  placeholder,
}: Props) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return isMobile ? (
    <Form onSubmit={(e) => onSubmit(e)} isMobile={isMobile}>
      <BorderContainer
        display="flex"
        align="center"
        justify="space-between"
        height={40 / 0.8}
        border={color}
        radius={radius}
        margin={type === 'news' ? '32px 0 32px auto' : '0px'}
      >
        <Input
          value={value}
          onChange={onChange}
          width="100%"
          height={40 / 0.8}
          padding="10px"
          radius="10px"
          border="none"
          placeholder={placeholder}
        />
        <Button
          type="submit"
          margin="0 auto"
          border="none"
          width={type === 'archive' ? 44 / 0.8 : 44}
          height={type === 'archive' ? 40 : 24}
          display="flex"
          justify="center"
          align="center"
          onClick={onSearch}
        >
          <Img
            src={mobileSearch}
            alt="검색돋보기"
            width={type === 'archive' ? 20 / 0.8 : 24}
            height={type === 'archive' ? 20 / 0.8 : 24}
          />
        </Button>
      </BorderContainer>
    </Form>
  ) : (
    <Form onSubmit={(e) => onSubmit(e)} isMobile={isMobile}>
      <BorderContainer
        display="flex"
        align="center"
        width={width}
        height={height}
        border={color}
        radius={radius}
        margin={type === 'news' ? '32px 0 32px auto' : '0px'}
      >
        <Input
          value={value}
          onChange={onChange}
          width={type === 'archive' ? 295 : 553}
          height={height}
          padding={type === 'archive' ? '11px 17px' : '10px'}
          radius="10px"
          border="none"
          placeholder={placeholder}
        />
        <Button
          type="submit"
          margin="0 auto"
          border="none"
          width={type === 'archive' ? 32 : 24}
          height={type === 'archive' ? 32 : 24}
          onClick={onSearch}
        >
          <Img
            src={search}
            alt="검색돋보기"
            width={type === 'archive' ? 32 : 24}
            height={type === 'archive' ? 32 : 24}
          />
        </Button>
      </BorderContainer>
    </Form>
  );
}
