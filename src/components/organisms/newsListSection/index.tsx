import React, { useState, useEffect } from 'react';
import { TableRow, SearchBar, Pagination } from '@molecules';
import { Th, Tr, THead } from '@atoms';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { PostType } from '@src/models/post';
import { noticeListState, noticeListInitialState } from '../../../recoil/notice/notice';

type DataType = {
  id: number;
  board: string;
  category: string;
  titleKo: string;
  titleEn: string;
  body: string;
  status: number;
  highlightStatus: number;
  files: any[];
};

interface Props {
  data: PostType[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  limit: number;
  total: number;
}

export function NewsListSection({ data, page, setPage, limit, total }: Props) {
  const [newsData, setNewsData] = useState<PostType[]>(data);
  const [notices, setNotices] = useRecoilState<PostType[]>(noticeListState);
  const [noticeListInitial, setNoticeListInitial] = useRecoilState<PostType[]>(noticeListInitialState); // api에서 받아오는 걸로

  const [value, setValue] = useState<string>('');

  console.log(notices);

  const offset = (page - 1) * limit;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value === '') {
      // setNewsData(data);
      setNotices(noticeListInitial);
    }
  }, [data, noticeListInitial, setNotices, value]);

  // 아마 api?
  const onSearch = () => {
    // const newData = notices.filter((e) => e.titleKo.includes(value));
    // console.log(newData);
    // setNotices(newData);
  };

  const count = 3;
  const createdDated = '2023-06-01';
  return (
    <>
      <SearchBar
        type="news"
        value={value}
        onChange={onChange}
        onSearch={onSearch}
        color="#767676"
        radius={5}
        width={599}
        height={40}
        placeholder="제목 검색"
      />
      <table style={{ width: '100%', borderSpacing: 0 }}>
        <THead>
          <Tr>
            <Th className="left">번호</Th>
            <Th className="title">제목</Th>
            <Th>조회수</Th>
            <Th className="right">등록일</Th>
          </Tr>
        </THead>

        {notices.length === 0 ? (
          <div>등록된 글이 없습니다.</div>
        ) : (
          <tbody>
            {/* {newsData.map((newsInfo) => ( */}
            {notices.map((newsInfo) => (
              <TableRow
                key={newsInfo.id}
                id={newsInfo.id}
                num={newsInfo.id}
                title={newsInfo.titleKo}
                count={count}
                date={createdDated}
              />
            ))}
          </tbody>
        )}
      </table>
      {newsData.length !== 0 ? <Pagination total={total} limit={limit} page={page} setPage={setPage} /> : null}
    </>
  );
}