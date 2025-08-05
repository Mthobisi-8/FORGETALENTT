
import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold mb-4 text-center">
        Unlock Your Career with Forge Talent!
      </h2>
      <div className="flex items-center justify-center">
        <button
          onClick={togglePlayPause}
          className="p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </div>
      <audio
        ref={audioRef}
        className="hidden"
        src="/freecompress-invideo-ai-1080 Unlock Your Career with Forge Talent! 2025-02-07.mp4"
      />
    </div>
  );
};

export default AudioPlayer;
