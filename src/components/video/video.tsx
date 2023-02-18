"use client";
import { FC, useEffect, useRef } from "react";

interface VideoProps {
  mainVideo: string;
  inView: boolean;
}

const Video: FC<VideoProps> = ({ mainVideo, inView }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    if (videoRef.current) videoRef.current.currentTime = 0;
  }, [inView]);

  return (
    <div>
      <video ref={videoRef} loop muted autoPlay playsInline preload='metadata'>
        <source src={mainVideo} type='video/mp4' />
      </video>
    </div>
  );
};

export default Video;
