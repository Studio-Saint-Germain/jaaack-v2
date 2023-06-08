'use client';

import ReactPlayer from 'react-player';

interface VideoFullBackgroundProps {
  url: string;
}

export default function VideoFullBackground({url}: VideoFullBackgroundProps) {
  return (
    <ReactPlayer muted className="absolute z-0 !w-auto !min-w-[101%] !min-h-[101%] !max-h-none !max-w-none video-preview-player" loop playsinline playing url={url} />
  )
}
