import React from 'react';
import { FlexContainer, Grid } from '@atoms';
import { Pagination } from '@molecules';
import { ContentBox } from '@molecules/contentBox';
import { SketchProps } from 'src/models/sketch';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { modalDataState, modalState } from '../../../recoil/archive/atome';

interface Props {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  photos: SketchProps[];
}

export function SketchList({ page, setPage, photos }: Props) {
  const setModal = useSetRecoilState(modalState);

  const limit = 15;
  const offset = page * limit;

  return (
    <>
      <FlexContainer width={1280} margin="0 auto" wrap="wrap" className="cursor">
        <Grid templatecolumns="1fr 1fr 1fr" gap="21px 16px">
          {photos.slice(offset, offset + limit).map((photo) => (
            <ContentBox
              key={photo.id}
              id={photo.id}
              title={photo.title}
              date={photo.date}
              count={photo.count}
              type="archive"
              url={photo.urls}
            />
          ))}
        </Grid>
      </FlexContainer>
      <Pagination total={photos.length} limit={limit} page={page} setPage={setPage} />
    </>
  );
}
