'use client';

import ReactPlayer from 'react-player';

interface VideoFullBackgroundProps {
  url: string;
}

export default function VideoFullBackground({url}: VideoFullBackgroundProps) {
  return (
    <ReactPlayer muted className="fixed z-0 top-0 !w-auto !min-w-full !min-h-full !max-h-none !max-w-none video-preview-player" loop playsinline playing url={url} />
  )
}
