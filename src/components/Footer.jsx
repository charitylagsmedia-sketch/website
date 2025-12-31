import React from 'react'
import insta from "../assets/icons/insta.svg"
import tiktok from "../assets/icons/tiktok.svg"
import yt from "../assets/icons/yt.svg"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className='px-6 pt-9 items-start w-full align-left bg-black text-white flex flex-col'>
        <h1 className='font-quantico text-2xl'>
          Contact Us
        </h1>
        <a href="mailto:contact@charitymedianetwork.org" className='pt-5'>charitylagsmedia@gmail.com</a>
        <div className='flex-row'>
          <a href="tel:+233503674842">+233503674842</a>
          <span className='px-1'>/</span>
          <a href="tel:+233209604728">+233209604728</a>
        </div>
        <div className='flex-row flex space-x-2 py-2'>
          <a href="https://www.tiktok.com/@charity.ag.love.c">
            <img src={tiktok} alt="Tiktok" />
          </a>
          <a href="https://www.instagram.com/charityaglovecentre?igsh=MXFwNXZtODNrZGZ5bA==">
            <img src={insta} alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/link/v2?aid=1988&lang=en-GB&scene=bio_url&target=https%3A%2F%2Fyoutube.com%2F%40charityaglovecenteradenta%3Fsi%3Dru5GUYPAIh53L6kY">
            <img src={yt} alt="YouTube" />
          </a>
        </div>
        <p className='font-quicksand text-sm pt-5 pb-9'>&copy; {currentYear} Charity Media Network. All rights reserved.</p>
      </div>

    </>
  )
}
