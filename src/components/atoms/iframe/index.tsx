import React from 'react';

interface Props {
  url: string;
  type?: string;
  isMobile?: boolean;
}

export function Iframe({ url, type, isMobile }: Props) {
  return (
    <iframe
      // eslint-disable-next-line no-nested-ternary
      width={type === 'main' ? (isMobile ? 307 : 504) : 413 * 0.8}
      // eslint-disable-next-line no-nested-ternary
      height={type === 'main' ? (isMobile ? 173 : 282) : 275 * 0.8}
      src={`https://www.youtube.com/embed/${url}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    />
  );
}
