import Image from "next/image";
import { drawingsApi } from "../api/drawings";

export const metadata = {
  title: 'Jack Antoine Charlot - Director & Animation Director - Drawings',
  description: 'Drawings, designs and doodles by Jack Antoine Charlot, director and animation director.',
  alternates: { canonical: '/drawings' },
}

export default async function Drawings() {
  const drawings = await drawingsApi.getDrawings();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between md:pl-16 md:py-0">
        {/* Right-click lands on the cell, not the media: no "Save as" (deterrent, not real protection) */}
        <div className="w-full gap-0 --grid drawings select-none">
          {drawings.filter((drawing) => drawing.acf.media).map((drawing, i) => (
            <div key={drawing.id} className="grid-item relative h-49vh overflow-hidden">
              {drawing.acf.media.mime_type.startsWith('video/') ? (
                <video className="pointer-events-none" src={drawing.acf.media.url} loop playsInline autoPlay muted />
              ) : (
                <Image
                  src={drawing.acf.media.url}
                  alt={drawing.acf.media.alt || drawing.title.rendered}
                  width={drawing.acf.media.width || 1200}
                  height={drawing.acf.media.height || 1200}
                  priority={i === 0}
                  sizes={i === 0 ? '100vw' : '(max-width: 991px) 100vw, 50vw'}
                  className="pointer-events-none"
                  draggable={false}
                />
              )}
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
