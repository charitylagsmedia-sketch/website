import React from 'react'
import { motion } from 'motion/react';
import left from "../assets/icons/Arrow left.svg"
import right from "../assets/icons/Arrow right.svg"
import videography from "../assets/teamPhotos/videography.jpg"
import photography from "../assets/teamPhotos/photography.jpg"
import directors from "../assets/teamPhotos/directors.jpg"
import contentCreation from "../assets/teamPhotos/contentCreation.jpg"
import webDev from "../assets/teamPhotos/kingsley.jpg"
import Projections from "../assets/teamPhotos/lawrence.jpg"
import editing from "../assets/teamPhotos/editing.jpg"

export default function Team() {
  const images =[
    { label: "Directors", src: directors },
    { label: "Web Design & Development", src: webDev },
    { label: "Projector Operator", src: Projections },
    { label: "Content Creation", src: contentCreation },
    { label: "Video Editing", src: editing },
    {label: "Videography", src: videography},
    { label: "Photography", src: photography },
  ]
  return (
    <>
      <h1 className='font-quantico text-3xl pl-6'>Meet the Team</h1>
      <div className='w-screen h-auto pb-16 overflow-x-auto no-scrollbar snap-x snap-mandatory' style={{ WebkitOverflowScrolling: 'touch' }}>
        <motion.div className='flex flex-row'>
          {images.map((image, index) => (
            <>
            <div className='flex-col'>
              <section key={index} className='snap-start w-screen h-full relative flex items-center justify-center flex-shrink-0'>
                <img src={image.src} alt={image.label} className=' inset-0 w-full h-[250px] object-cover' />
              </section>
                <div className='relative z-10 text-center'>
                  <h2 className='font-quantico text-2xl text-white drop-shadow-md'>
                    {image.label}
                  </h2>
                </div>
            </div>
            </>
          ))}
        </motion.div>
      </div>
      <div className='flex justify-between'>
        <img src={left} alt="Left Arrow" className='h-8 w-8 ml-4 cursor-pointer' />
        <img src={right} alt="Right Arrow" className='h-8 w-8 mr-4 cursor-pointer' />
      </div>

    </>
  )
}
