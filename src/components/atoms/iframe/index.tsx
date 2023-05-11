import React from 'react';

interface Props {
  url?: string;
}

export function Iframe({ url }: Props) {
  return (
    <iframe
      width="504"
      height="282"
      src={`https://www.youtube.com/embed/${url}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
