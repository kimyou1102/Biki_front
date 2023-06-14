import React from 'react';
import { FlexContainer, Grid } from '@atoms';
import { Pagination } from '@molecules';
import { ContentBox } from '@molecules/contentBox';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { SketchProps, SketchType } from '../../../models/sketch';
import { ClipType } from '../../../models/clip';
import { modalDataState, modalState } from '../../../recoil/archive/atome';

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  // datas: SketchType[] | ClipType[];
  datas: SketchType[] | ClipType[] | [];
}

export function SketchList({ page, setPage, datas }: Props) {
  const setModal = useSetRecoilState(modalState);

  const limit = 15;
  const offset = page * limit;

  return (
    <>
      <FlexContainer width={1280} margin="0 auto" wrap="wrap">
        <Grid templatecolumns="1fr 1fr 1fr" gap="21px 16px">
          {datas.slice(offset, offset + limit).map((data) => {
            const date = new Date(data.createdDate);
            console.log(data);
            console.log(data.url);
            console.log(data.images);
            return (
              <ContentBox
                key={data.id}
                id={data.id}
                title={data.titleKo}
                date={`${date.getFullYear()} / ${date.getMonth() + 1} / ${date.getDate()}`}
                count={data.view}
                type="archive"
                subType="clip"
                url={data.images ? data.images! : data.url!}
              />
            );
          })}
        </Grid>
      </FlexContainer>
      <Pagination total={datas.length} limit={limit} page={page} setPage={setPage} />
    </>
  );
}
