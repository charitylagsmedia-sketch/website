import React from 'react'
import {motion} from 'motion/react';


export default function Acknowledgment() {
  const credits = [
    { role: 'Directors', names: ['Opoku David', 'Awuni Edward', 'Enerstina Opoku'] },
    { role: 'Web Design & Development', names: ['Torkuebu Kingsley'] },
    { role: 'Photography', names: ['Deku Kelvin', 'Bansah Selorm', 'Seddoh Martin', 'Owusu-Mensah Patrick', 'Owusu-Asante Esther'] },
    { role: 'Videography', names: ['Akpleeski Edem', 'Darko Precious', 'Asamoah Abigail', 'Aggey Monica'] },
    { role: 'Editors', names: ['Opoku Jesse', 'Nsiah Noah'] },
    { role: 'Content Creation', names: ['Hanson Joseph', 'Nsiah Jasmine', 'Adjetey Francis', 'Atsu Priscilla'] },
    { role: 'Projector Operator', names: ['Otu-Debrah Lawrence'] },
  ];


  return (
    <>
      <div className='w-full px-6 pt-9'>
          <h1 className='font-quantico text-3xl'>Acknowledgement</h1>
          <p className='font-quicksand text-lg pt-3'>
            The Charity Media Network (CMN) gives all glory to God Almighty for His grace, strength, and guidance throughout this project. 
            We sincerely thank our Senior Pastor for his vision and leadership, our donors and partners for their generous support, and the entire church leadership and members for their cooperation. 
            Special appreciation goes to our media team and volunteers whose dedication and sacrifice made this documentary possible.
          </p>
          <p className='font-quantico text-3xl pt-9'>Credits</p>
          <div className="overflow-hidden w-full pt-2">
      <motion.div
        className="flex w-max justify-center top-0 align-top"
        animate={{ x: ["0%", "-50%"] }} 
        transition={{
          x: {
            repeat: Infinity,
            duration: 8,
            ease: "linear", 
          },
        }}
      >
            {credits.map((credit, index) => (
              <div key={index} className='mr-12'>
                <h2 className='font-quantico text-xl pt-3 mb-2'>{credit.role}</h2>
                <ul>
                  {credit.names.map((name, nameIndex) => (
                    <li key={nameIndex} className='font-quicksand text-lg'>{name}</li>
                  ))}
                </ul>
              </div>
            ))}

            {credits.map((credit, index) => (
              <div key={index} className='mr-12'>
                <h2 className='font-quantico text-xl pt-3 mb-2'>{credit.role}</h2>
                <ul>
                  {credit.names.map((name, nameIndex) => (
                    <li key={nameIndex} className='font-quicksand text-lg'>{name}</li>
                  ))}
                </ul>
              </div>
            ))}
      </motion.div>
          </div>
        </div>

    </>
  )
}
