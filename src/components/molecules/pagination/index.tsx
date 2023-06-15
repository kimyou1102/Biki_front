/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Button, Img, FlexContainer } from '@atoms';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactPaginate from 'react-paginate';
import pageLeft from '../../../assets/images/pageLeft.png';
import pageRight from '../../../assets/images/pageRight.png';

interface Props {
  total: number;
  limit: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

function PrevButton() {
  return (
    <Button width={24} height={24} margin="0px 45px 0px 0px">
      <Img alt="전페이지" src={pageLeft} width={24} height={24} />
    </Button>
  );
}

function NextButton() {
  return (
    <Button width={24} height={24} margin="0px 0px 0px 45px">
      <Img alt="페이지오른쪽" src={pageRight} width={24} height={24} />
    </Button>
  );
}

export function Pagination({ total, limit, page, setPage }: Props) {
  const numPage = Math.ceil(total / limit);
  // console.log(numPage);
  // const arr = Array.from({ length: numPage }, (v, i) => i);
  const items = Array.from({ length: numPage }, (v, i) => i);

  const [currentItems, setCurrentItems] = useState<any>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = limit;

  const handlePageClick = (event: any) => {
    // const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    // setItemOffset(newOffset);
    setPage(event.selected);
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // setCurrentItems(items.slice(itemOffset, endOffset));
    // setPageCount(Math.ceil(items.length / itemsPerPage));
  };

  return (
    <FlexContainer justify="center" margin="26px 0px 0px 0px">
      <ReactPaginate
        breakLabel="..."
        nextLabel={<NextButton />}
        onPageChange={(e) => handlePageClick(e)}
        pageRangeDisplayed={7}
        pageCount={numPage}
        previousLabel={<PrevButton />}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-left"
        nextLinkClassName="page-right"
        activeLinkClassName="active"
      />
    </FlexContainer>
  );
}
