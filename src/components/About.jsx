import React from 'react'
import { MediaPlayer, MediaProvider } from '@vidstack/react'
import thumbnail from "../assets/thumbnail.jpeg";
import vid from '../assets/videos/trailer-1.mp4';

export default function About() {
  return (
    <>
      <MediaPlayer
        src={vid}
        aspectRatio='16/9'
        className="w-full h-auto pb-9"
        load='visible'
        viewType='video'
        streamType='on-demand'
        poster={thumbnail}
      >
        <MediaProvider />
      </MediaPlayer>
      <div className='w-full px-6'>
        <h1 className='font-quantico text-3xl'>About the project</h1>
        <p className='font-quicksand text-lg pt-3'>
          This project is a heartfelt 5-minute documentary that reflects the life of the church over the past year. 
          Through sincere interviews, joyful celebrations, quiet challenges, and shared victories, it captures the dedication, love,
          and sacrifice of every ministry. It tells the story of a church family growing together, serving faithfully, and witnessing God’s hand in every moment.
        </p>
      </div>

    </>
  )
}
