'use client';

import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface YouTubeModalProps {
  children: React.ReactNode;
  videoId: string;
  title?: string;
}

export function YouTubeModal({ children, videoId, title = "Video Demo" }: YouTubeModalProps) {
  // Extract video ID from full URL if needed
  const extractVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  };

  const cleanVideoId = extractVideoId(videoId);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl max-w-full p-0 border-0 max-h-[90vh] sm:aspect-video">
        <div className="relative w-full h-full">
          <iframe
            src={`https://www.youtube.com/embed/${cleanVideoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}