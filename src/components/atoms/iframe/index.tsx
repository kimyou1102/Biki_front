import React from 'react';

interface Props {
  url: string;
  type?: string;
}

export function Iframe({ url, type }: Props) {
  return (
    <iframe
      width={type === 'main' ? 504 : 413 * 0.8}
      height={type === 'main' ? 282 : 275 * 0.8}
      src={`https://www.youtube.com/embed/${url}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
