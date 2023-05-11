import React from 'react';
import { YoutubeDescription } from '@molecules';
import { FlexContainer, Iframe } from '@atoms';
import { YoutubeProps } from 'src/models/youtube';

export function YoutubeBox({ title, date, count, url }: YoutubeProps) {
  return (
    <FlexContainer width={630} direction="column" margin="0px 17px 0px 0px">
      <Iframe url={url} />
      <YoutubeDescription title={title} date={date} count={count} />
    </FlexContainer>
  );
}
