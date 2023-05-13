import React from 'react';
import { ArchiveTemplate } from '@templates';
import { ArchiveMovieSection } from '@organisms';

export function ArchiveMoviePage() {
  return (
    <ArchiveTemplate title="배급작품" type="film">
      <ArchiveMovieSection />
    </ArchiveTemplate>
  );
}
