import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { TableRow, SearchBar, Pagination } from '@molecules';
import { Th, Tr, THead } from '@atoms';
import { PostType } from '@src/models/post';
import { languageState } from '../../../recoil/language/atom';

interface Props {
  data: PostType[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onSearch: () => void;
  limit: number;
  total: number;
}

export function NewsListSection({ data, page, setPage, inputValue, setInputValue, onSearch, limit, total }: Props) {
  const [value, setValue] = useState<string>('');
  const offset = (page - 1) * limit;
  const language = useRecoilValue(languageState);
  const { t } = useTranslation();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // console.log('뉴스섹션 : ', data.length);

  // useEffect(() => {
  //   if (value === '') {
  //     // setNewsData(data);
  //     setNotices(noticeListInitial);
  //   }
  // }, [data, noticeListInitial, setNotices, value]);

  // const onSearch = () => {
  //   // const newData = notices.filter((e) => e.titleKo.includes(value));
  //   // console.log(newData);
  //   // setNotices(newData);
  // };

  return (
    <>
      <SearchBar
        type="news"
        value={inputValue}
        onChange={onChange}
        onSearch={onSearch}
        color="#767676"
        radius={5}
        width={599}
        height={40}
        placeholder={t(`news.search`)}
      />
      <table style={{ width: '100%', borderSpacing: 0 }}>
        <THead>
          <Tr>
            <Th className="left">{t(`news.number`)}</Th>
            <Th className="title">{t(`news.title`)}</Th>
            <Th>{t(`views`)}</Th>
            <Th className="right">{t(`registrationDate`)}</Th>
          </Tr>
        </THead>

        {data.length === 0 ? (
          <div>{t(`news.empty`)}</div>
        ) : (
          <tbody>
            {data.map((newsInfo) => {
              const date = new Date(newsInfo.createdDate!);
              const dateStr = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;

              return (
                <TableRow
                  key={newsInfo.id}
                  id={newsInfo.id}
                  num={newsInfo.id}
                  title={language === 'English' ? newsInfo.titleKo : newsInfo.titleEn}
                  count={newsInfo.view!}
                  date={dateStr}
                />
              );
            })}
          </tbody>
        )}
      </table>
      {data.length !== 0 ? <Pagination total={total} limit={limit} page={page} setPage={setPage} /> : null}
    </>
  );
}
