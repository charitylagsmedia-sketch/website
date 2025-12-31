import React, { useState } from 'react';
import bgVideo from '../assets/videos/PURPLE.mp4';
import { motion } from 'motion/react';

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative h-screen w-full bg-black">
      <motion.video
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: videoLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        onCanPlay={() => setVideoLoaded(true)}
      />

       <div className="pointer-events-none backdrop-blur-sm absolute bottom-0 left-0 w-full h-40">
        <div className="absolute inset-0 backdrop-blur-md" />
        <div className="absolute backdrop-blur-sm inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="absolute z-10 flex pt-48 h-screen">
        {videoLoaded && (
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, type: 'spring', stiffness: 50, bounce: 0.6 }}
            className="pl-3 font-quantico text-6xl top-0 max-w-[60%] text-white"
          >
            A YEAR IN HIS PRESENCE
          </motion.div>
        )}
      </div>
    </div>
  );
}
