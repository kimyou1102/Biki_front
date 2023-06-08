import React, { useEffect, useRef } from 'react';
import { Input, Button, Img, BorderContainer } from '@atoms';
import { useRecoilState } from 'recoil';
import { filmInputState, sketchInputState } from '../../../recoil/archive/atome';
import { movieState, testMovie } from '../../../recoil/movies';
import { MovieInfo } from '../../../models/movie';
import search from '../../../assets/images/Search.png';

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

  return (
    <form onSubmit={(e) => onSubmit(e)}>
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
    </form>
  );
}
