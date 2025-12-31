import React, { useState } from 'react';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import playButton from "../assets/icons/playButton.svg";
import vid from '../assets/videos/A YEAR IN HIS PRESENCE.mp4';
import thumbnail from "../assets/thumbnail.jpeg";
import close from "../assets/icons/close.svg";
import { AnimatePresence, motion } from 'motion/react';

function PlayButton() {
  const [open, setOpen] = useState(false);

  const action = () => {
    console.log('Play button clicked');
    setOpen(true);
  };

  return (
    <>
      {/* Play Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <img
          src={playButton}
          alt="Play Button"
          className="w-20 h-20 cursor-pointer"
          onClick={action}   
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="p-4 flex flex-col justify-center items-center w-screen max-w-3xl bg-black/60 bg-opacity-75 rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, type: 'spring' }}
            >
              <MediaPlayer
                title="A Year In His Presence"
                src={vid}
                crossOrigin
                aspectRatio='16/9'
                load='visible'
                viewType='video'
                poster={thumbnail}
                streamType='on-demand'
              >
                <MediaProvider />
              </MediaPlayer>

              <button
                className="mt-3"
                onClick={() => setOpen(false)}
              >
                <img src={close} alt="Close Button" className="w-10 h-10" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}

export default PlayButton;
