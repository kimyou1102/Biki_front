import React from 'react';
import { Button, Img, FlexContainer } from '@atoms';
import pageLeft from '../../../assets/images/pageLeft.png';
import pageRight from '../../../assets/images/pageRight.png';

interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export function Pagination({ total, limit, page, setPage }: Props) {
  const numPage = Math.ceil(total / limit);
  const arr = Array.from({ length: numPage }, (v, i) => i + 1);

  const onPrevClick = () => {
    if (page !== 1) {
      setPage((prev) => prev - 1);
    }
  };

  const onNextClick = () => {
    if (page !== numPage) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <FlexContainer justify="center" margin="26px 0px 0px 0px">
      <Button onClick={onPrevClick} width={24} height={24} margin="0px 45px 0px 0px">
        <Img alt="페이지왼쪽" src={pageLeft} width={24} height={24} />
      </Button>
      {arr.map((e) => (
        <Button
          key={e}
          width={24}
          height={24}
          bgColor={e === page ? '#74B543' : 'transparent'}
          color={e === page ? 'white' : 'black'}
          border="none"
          radius="50%"
          margin="0px 13px 0px 0px"
          className={e === arr[arr.length - 1] ? 'right-none' : ''}
          onClick={() => setPage(e)}
        >
          {e}
        </Button>
      ))}
      <Button onClick={onNextClick} width={24} height={24} margin="0px 0px 0px 45px">
        <Img alt="페이지오른쪽" src={pageRight} width={24} height={24} />
      </Button>
    </FlexContainer>
  );
}
