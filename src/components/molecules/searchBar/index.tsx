import React, { useEffect } from 'react';
import { Input, Button, Img, BorderContainer } from '@atoms';
import { useRecoilState } from 'recoil';
import { filmInputState, sketchInputState } from '../../../recoil/archive/atome';
import { movieState, testMovie } from '../../../recoil/movies';
import { MovieInfo } from '../../../models/movie';
import search from '../../../assets/images/Search.png';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  color?: string;
  radius?: number;
  width?: number;
  height?: number;
  placeholder?: string;
}

export function SearchBar({ value, onChange, onSearch, color, radius, width, height, placeholder }: Props) {
  return (
    <BorderContainer display="flex" align="center" width={width} height={height} border={color} radius={radius}>
      <Input
        value={value}
        onChange={onChange}
        width={295}
        height={48}
        padding="11px 17px"
        radius="10px"
        border="none"
        placeholder={placeholder}
      />
      <Button type="button" margin="0 auto" border="none" width={32} height={32} onClick={onSearch}>
        <Img src={search} alt="검색돋보기" width={32} height={32} />
      </Button>
    </BorderContainer>
  );
}
