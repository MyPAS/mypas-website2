"use client";

import Image from "next/image";
import { useState } from "react";

/** Poster first; the YouTube iframe only loads after the visitor asks for it. */
export default function VideoEmbed({
  id,
  title,
  poster,
  label,
}: {
  id: string;
  title: string;
  poster: { src: string; width: number; height: number };
  label: string;
}) {
  const [play, setPlay] = useState(false);
  return (
    <div className="video">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlay(true)} aria-label={label} style={{ all: "unset", cursor: "pointer", position: "absolute", inset: 0 }}>
          <Image src={poster.src} width={poster.width} height={poster.height} alt="" sizes="(min-width: 1024px) 60vw, 100vw" />
          <span className="video__play" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 26 26">
              <path d="M8 5v16l13-8z" fill="currentColor" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}
