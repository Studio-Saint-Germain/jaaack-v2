interface VideoFullBackgroundProps {
  url: string;
  className?: string;
  fixed?: boolean;
}

export default function VideoFullBackground({url, className, fixed}: VideoFullBackgroundProps) {
  return (
    <video className={`${className ? className : ''} ${fixed ? 'fixed' : 'absolute'} z-0 inset-0 w-full h-full object-cover`} src={url} loop playsInline autoPlay muted />
  )
}
