'use client';

import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface VideoFullBackgroundProps {
  url: string;
  className?: string;
  fixed?: boolean;
}

export default function VideoFullBackground({url, className, fixed}: VideoFullBackgroundProps) {
  return (
    <ReactPlayer className={`${className ? className : ''} ${fixed ? 'fixed' : 'absolute'} z-0 top-0 !w-auto !min-w-full !min-h-full !max-h-none !max-w-none video-preview-player`} loop playsinline autoPlay playing muted url={url} />
  )
}
