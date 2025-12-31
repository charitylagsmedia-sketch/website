import React, { useState } from 'react';
import playButton from "../assets/icons/playButton.svg";

function PlayButton() {


  return (
    <>
      {/* Play Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <a href="https://youtu.be/vQZUCda8-4A">
          <img
            src={playButton}
            alt="Play Button"
            className="w-20 h-20 cursor-pointer"
          />
        </a>
      </div>

    </>
  );
}

export default PlayButton;
