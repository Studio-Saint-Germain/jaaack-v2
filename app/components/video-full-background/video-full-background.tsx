'use client';

import ReactPlayer from 'react-player';

interface VideoFullBackgroundProps {
  url: string;
}

export default function VideoFullBackground({url}: VideoFullBackgroundProps) {
  return (
    <ReactPlayer muted className="absolute !object-center !object-cover z-0 !w-auto !min-w-full !min-h-full !max-h-none !max-w-none video-preview-player" loop playsinline playing url={url} />
  )
}
