"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";

interface InstallationVideoProps {
  src: string;
  poster: string;
  alt: string;
}

export default function InstallationVideo({ src, poster, alt }: InstallationVideoProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <div className="relative w-full h-full bg-navy">
      <video
        ref={videoRef}
        controls={playing}
        preload="none"
        poster={poster}
        className="w-full h-full object-cover"
        onPlay={() => setPlaying(true)}
        aria-label={alt}
      >
        <source src={src} type="video/mp4" />
      </video>
      {!playing && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-navy/30 hover:bg-navy/40 transition-colors cursor-pointer"
          aria-label="Play video"
        >
          <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center shadow-lg">
            <Play className="w-6 h-6 text-navy ml-0.5" fill="currentColor" />
          </div>
        </button>
      )}
    </div>
  );
}
